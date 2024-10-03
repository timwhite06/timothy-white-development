import { MetadataRoute } from 'next';

const urlList = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/pages/about' },
  { name: 'Terms', route: '/pages/policies/privacy-policy' },
  { name: 'Terms', route: '/pages/policies/terms-of-service' }
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://timothywhitedevelopment.com';

  const urlMap = urlList.map((page) => {
    return `${baseUrl}${page.route}`;
  });

  return {
    rules: {
      userAgent: '*',
      allow: urlMap,
      disallow: [`${baseUrl}/pages/admin/`, `${baseUrl}/api/`]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
