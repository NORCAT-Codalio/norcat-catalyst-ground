import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSearchPage, normalizeSearchPath, SITE_URL } from '@/lib/seo-pages';

export function RouteSEO() {
  const { pathname } = useLocation();
  const path = normalizeSearchPath(pathname);
  const page = getSearchPage(path);
  const privatePage = path === '/portal' || path.startsWith('/portal/') || path === '/mentor' || path.startsWith('/mentor/') || path === '/reset-password';
  const alternateHome = ['/home-original', '/home-2', '/home-3'].includes(path);
  const title = page?.title ?? (privatePage ? 'Portal | NORCAT Innovation' : alternateHome ? 'NORCAT Innovation' : 'Page Not Found | NORCAT Innovation');
  const description = page?.description ?? (privatePage ? 'Secure client and mentor access to NORCAT Innovation.' : 'Explore NORCAT Innovation programs, funding, and startup support in Sudbury and Northern Ontario.');
  const canonical = `${SITE_URL}${alternateHome ? '/' : path}`;
  const parentPath = path.substring(0, path.lastIndexOf('/')) || '/';
  const parent = getSearchPage(parentPath);
  const crumbs = page && path !== '/' ? [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    ...(parent && parentPath !== '/' ? [{ '@type': 'ListItem', position: 2, name: parent.label, item: `${SITE_URL}${parentPath}` }] : []),
    { '@type': 'ListItem', position: parent && parentPath !== '/' ? 3 : 2, name: page.label, item: canonical },
  ] : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={page ? 'index, follow, max-image-preview:large' : 'noindex, follow'} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NORCAT Innovation" />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      {crumbs && <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs })}</script>}
    </Helmet>
  );
}