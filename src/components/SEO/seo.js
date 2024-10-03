// components/Seo.js
import Head from 'next/head';

const Seo = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  url
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

Seo.defaultProps = {
  title: 'Default Title',
  description: 'Default description',
  keywords: 'default, keywords',
  ogImage: '/default-og-image.jpg',
  url: 'https://www.yoursite.com'
};

export default Seo;
