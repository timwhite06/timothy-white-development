export async function generateMetadata({ params: { slug } }) {
  return {
    title: 'About Us | Company Name',
    description:
      'Learn more about Company Name, our mission, values, and the team behind our innovative web solutions.',
    openGraph: {
      type: 'website',
      url: `https://timothywhitedevelopment.com/${slug}`,
      title: 'About Us | Company Name',
      description:
        'Learn more about Company Name, our mission, values, and the team behind our innovative web solutions.',
      images: '/images/logo.png',
      site_name: 'Company Name'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us | Company Name',
      description:
        'Learn more about Company Name, our mission, values, and the team behind our innovative web solutions.',
      images: '/images/logo.png'
    },
    keywords:
      'about us, Company Name, mission, values, team, innovative web solutions'
  };
}

const About = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-5">
        <div>
          <h2 className="text-4xl">About Page</h2>
          <div className="text-2xl">Coming Soon:</div>
          <ul className="list-disc list-inside ml-4 mt-3">
            <li>Portfolio</li>
            <li>Company information</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
