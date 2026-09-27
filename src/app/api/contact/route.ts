const MAX_REQUEST_BYTES = 20_000;

function jsonResponse(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function normalizeSingleLine(value: unknown) {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();

    if (new TextEncoder().encode(rawBody).length > MAX_REQUEST_BYTES) {
      return jsonResponse(
        {
          ok: false,
          error: "Your message is too large.",
        },
        413
      );
    }

    let body;

    try {
      body = JSON.parse(rawBody);
    } catch {
      return jsonResponse(
        {
          ok: false,
          error: "Invalid request.",
        },
        400
      );
    }

    const name = normalizeSingleLine(body.name);
    const email = normalizeSingleLine(body.email);
    const subject = normalizeSingleLine(body.subject);
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "").trim();

    // Honeypot: silently accept likely bot submissions.
    if (website) {
      return jsonResponse({ ok: true });
    }

    const fields: Record<string, string> = {};

    if (!name) fields.name = "Name is required.";
    else if (name.length > 100)
      fields.name = "Name must be 100 characters or fewer.";

    if (!email) fields.email = "Email is required.";
    else if (email.length > 254 || !isValidEmail(email))
      fields.email = "Enter a valid email address.";

    if (!subject) fields.subject = "Subject is required.";
    else if (subject.length > 150)
      fields.subject = "Subject must be 150 characters or fewer.";

    if (!message) fields.message = "Message is required.";
    else if (message.length > 5000)
      fields.message = "Message must be 5,000 characters or fewer.";

    if (Object.keys(fields).length > 0) {
      return jsonResponse(
        {
          ok: false,
          error: "Please check the information you entered.",
          fields,
        },
        400
      );
    }

    // Email delivery goes here next.

    const resendApiKey = process.env.RESEND_API_KEY;
const contactEmailFrom = process.env.CONTACT_EMAIL_FROM;
const contactEmailTo = process.env.CONTACT_EMAIL_TO;

if (!resendApiKey || !contactEmailFrom || !contactEmailTo) {
  console.error("Contact email configuration is missing.");

  return jsonResponse(
    {
      ok: false,
      error: "The contact service is temporarily unavailable.",
    },
    503
  );
}

const emailBody = [
  "New portfolio contact message",
  "",
  `Name: ${name}`,
  `Email: ${email}`,
  `Subject: ${subject}`,
  "",
  "Message:",
  message,
].join("\n");

const resendResponse = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${resendApiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    from: contactEmailFrom,
    to: [contactEmailTo],
    reply_to: email,
    subject: `Portfolio Contact: ${subject}`,
    text: emailBody,
  }),
});

if (!resendResponse.ok) {
  const providerError = await resendResponse.text();

  console.error(
    "Resend rejected portfolio contact email:",
    resendResponse.status,
    providerError
  );

  return jsonResponse(
    {
      ok: false,
      error: "Your message could not be sent. Please try again.",
    },
    502
  );
}

return jsonResponse({
  ok: true,
  message: "Your message has been sent.",
});
  } catch (error) {
    console.error("Contact request failed:", error);

    return jsonResponse(
      {
        ok: false,
        error: "Something went wrong. Please try again.",
      },
      500
    );
  }
}