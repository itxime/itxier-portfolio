"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    setStatus("Please complete the required fields.");
    return;
  }

  setStatus("Sending your message...");
  setIsSending(true);

  try {
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        website: formData.get("website"),
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.error || "Unable to send your message.");
    }

    form.reset();
    setStatus(`Thank you! ${result.message}`);
  } catch (error) {
    setStatus(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSending(false);
  }
}

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            maxLength={100}
            required
          />
        </div>

        <div className="contact-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={254}
            required
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          maxLength={150}
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          maxLength={5000}
          required
        />
      </div>

      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-form-footer">
        <button
          className="contact-primary"
          type="submit"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        <p
          className="contact-status"
          aria-live="polite"
        >
          {status}
        </p>
      </div>
    </form>
  );
}