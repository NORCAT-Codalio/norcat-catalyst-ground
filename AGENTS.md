## Architecture decisions

- Portal authentication uses one shared `/portal/auth` entry and routes approved users by role; this avoids separate client and mentor credentials.
- The authentication provider is mounted in the application entry point, outside the replaceable app tree, so preview refreshes cannot orphan auth consumers.
- News articles and their About sections share one inline text renderer across the News page and homepage feed so written website addresses remain clickable in both views.