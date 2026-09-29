## Architecture decisions

- Portal authentication uses one shared `/portal/auth` entry and routes approved users by role; this avoids separate client and mentor credentials.
- The authentication provider is mounted in the application entry point, outside the replaceable app tree, so preview refreshes cannot orphan auth consumers.