import Seo from '@/components/SEO/seo';

export default function Home() {
  return (
    <div className="p-10">
      <Seo
        title="Home Page"
        description="This is the home page description."
        keywords="home, page, keywords"
        ogTitle="Home Page - My Website"
        ogDescription="This is the open graph description for the home page."
        ogImage="/images/home-og-image.jpg"
        url="https://www.yoursite.com/"
      />
      <p>Home page</p>
    </div>
  );
}
