## Goal
Refresh the client portal sign-in experience to match NORCAT’s current navy, blue, teal, grey, and liquid-glass branding, while simplifying account access.

## Changes
- Restyle the `/portal/auth` page with the current NORCAT logo, palette, typography, glass treatment, and more restrained client-portal tone.
- Remove the temporary “Client Portal” and “Mentor Portal” shortcut buttons.
- Keep one shared sign-in form; existing role-based routing will continue sending approved clients and mentors to the correct portal after sign-in.
- Replace “Have an invite code?” with a working “Forgot password?” action that emails a secure password-reset link.
- Add a clearly separated “Not a client yet?” action linking to `/apply`, where visitors can complete the existing discovery/application form.
- Preserve invite-only account creation when someone arrives with an invitation code, without advertising registration on the normal sign-in view.
- Update the portal’s visible NORCAT identity where needed so the sign-in experience and portal shell feel consistent.

## Technical details
- Enable email/password authentication settings required by the existing sign-in and reset flows.
- Extend the existing auth helper with password-reset email handling and a same-origin recovery redirect.
- Use existing design-system controls and semantic styling; no database changes are needed.

## Verification
- Confirm sign-in validation, forgot-password confirmation/error states, invite-link account creation, and the `/apply` destination.
- Check desktop and mobile layouts and confirm the preview builds without errors.
