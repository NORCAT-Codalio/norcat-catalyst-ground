import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SITE_URL, searchPages } from '../src/lib/seo-pages';

const urls = searchPages.map(page => `  <url><loc>${SITE_URL}${page.path}</loc></url>`);
writeFileSync(resolve('public/sitemap.xml'), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  '</urlset>',
  '',
].join('\n'));
console.log(`Sitemap written with ${searchPages.length} public pages.`);