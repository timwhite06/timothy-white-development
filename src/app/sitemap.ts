const urlList = [
  { name: 'Home', route: '/' },
  { name: 'Pricing', route: '/pages/pricing' },
  { name: 'Contact', route: '/pages/contact' },
  { name: 'About', route: '/pages/about' },
  { name: 'Terms', route: '/pages/policies/privacy-policy' },
  { name: 'Terms', route: '/pages/policies/terms-of-service' }
];

export default async function sitemap() {
  const baseUrl = 'https://timothywhitedevelopment.com';

  const allPages = urlList.map((page) => {
    return {
      url: `${baseUrl}${page.route}`,
      lastModified: new Date(),
      //   changeFrequency: 'weekly', //research this
      priority: 1
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      //   changeFrequency: 'weekly', //research this
      priority: 1
    },
    ...allPages
  ];
}
