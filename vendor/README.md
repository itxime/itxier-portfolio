# Local UI package

`cleanflow-ui-0.1.2.tgz` is the versioned CleanFlow UI source-build artifact.
It is stored in this repository so `npm ci` can resolve the relative
`file:vendor/cleanflow-ui-0.1.2.tgz` dependency on another machine or Workers Builds.
Include the archive when committing this integration; do not replace it with a
path outside the repository. No npm registry publication is required.

SHA-256: `ec9f2c8772ed57cad50d833d3f3f9fc2515d28fb944e9df120039e2f642bc982`

The package contains fictional sample data only. It is private and UNLICENSED;
keep it within the authorized project distribution. For a later release, build
and verify a new version in CleanFlow, copy its archive here, update the dependency
and lockfile, then rerun the portfolio and OpenNext builds and browser checks.

The previous `cleanflow-ui-0.1.0.tgz` and `cleanflow-ui-0.1.1.tgz` archives are retained for rollback/reference.
