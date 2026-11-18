## Architecture decisions

- Portal authentication uses one shared `/portal/auth` entry and routes approved users by role; this avoids separate client and mentor credentials.
- The authentication provider is mounted in the application entry point, outside the replaceable app tree, so preview refreshes cannot orphan auth consumers.
- News articles and their About sections share one inline text renderer across the News page and homepage feed so written website addresses remain clickable in both views.
- Keep route search metadata and sitemap entries in one public-page catalog; this prevents missing pages and excludes authenticated surfaces and alternate homepage drafts from discovery.
- Mount HelmetProvider at the application entry point and render route metadata inside BrowserRouter; this keeps titles, canonical URLs, and indexing directives synchronized during navigation.