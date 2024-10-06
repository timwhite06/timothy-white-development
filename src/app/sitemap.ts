const urlList = [
  { name: 'Home', route: '/' },
  { name: 'Showcase', route: '/pages/showcase' }
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
