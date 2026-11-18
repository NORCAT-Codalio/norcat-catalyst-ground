import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { getSearchPage, searchPages, SITE_URL } from '../src/lib/seo-pages';

describe('Search discovery coverage', () => {
  test('includes every public route and omits private access and alternate homepages', () => {
    const routes = [...readFileSync('src/App.tsx', 'utf8').matchAll(/<Route path="([^"]+)"/g)].map(match => match[1]);
    const publicRoutes = routes.filter(path => path !== '*' && !path.startsWith('/portal') && !path.startsWith('/mentor') && path !== '/reset-password' && !path.startsWith('/home-'));
    expect(searchPages.map(page => page.path).sort()).toEqual(publicRoutes.sort());
  });

  test('normalizes trailing slashes without treating private routes as public', () => {
    expect(getSearchPage('/about/')?.path).toBe('/about');
    expect(getSearchPage('/portal/company')).toBeUndefined();
    expect(getSearchPage('/mentor/ventures/example')).toBeUndefined();
    expect(getSearchPage('/reset-password')).toBeUndefined();
    expect(getSearchPage('/home-original')).toBeUndefined();
  });

  test('sitemap exactly matches the public catalog without fabricated modification dates', () => {
    const sitemap = readFileSync('public/sitemap.xml', 'utf8');
    const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    expect(locations).toEqual(searchPages.map(page => `${SITE_URL}${page.path}`));
    expect(sitemap.includes('<lastmod>')).toBe(false);
  });
});