import { MetadataRoute } from 'next';

const urlList = [
  { name: 'Home', route: '/' },
  { name: 'Showcase', route: '/pages/showcase' }
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
