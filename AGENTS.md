## Architecture decisions

- Portal authentication uses one shared `/portal/auth` entry and routes approved users by role; this avoids separate client and mentor credentials.