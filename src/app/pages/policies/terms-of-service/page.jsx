export async function generateMetadata({ params: { slug } }) {
  return {
    title: 'Terms of Service | Company Name',
    description:
      'Read our Terms of Service to understand the legal agreements that govern your use of Company Name services and website.',
    openGraph: {
      type: 'article',
      url: `https://timothywhitedevelopment.com/${slug}`,
      title: 'Terms of Service | Company Name',
      description:
        'Read our Terms of Service to understand the legal agreements that govern your use of Company Name services and website.',
      images: '/images/logo.png',
      site_name: 'Company Name'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Terms of Service | Company Name',
      description:
        'Read our Terms of Service to understand the legal agreements that govern your use of Company Name services and website.',
      images: '/images/logo.png'
    },
    keywords:
      'terms of service, legal agreements, user agreements, Company Name, web development terms, website terms of service'
  };
}

const TermsOfServices = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="card max-w-[900px]">
          <div className="card-body">
            <h2 className="card-header text-4xl">Terms Of Service</h2>
            <p className="text-content2 text-2xl">
              Effective Date: {currentYear}
            </p>
            <br />
            <h3 className="font-bold">1. Agreement to Terms</h3>
            <div className="indent">
              <p>
                By using our service, you agree to these terms. Please read them
                carefully.
              </p>
            </div>
            <br />
            <h3 className="font-bold">2. Using our Services</h3>
            <div className="indent">
              <p>
                You must follow any policies made available to you within the
                Services.
              </p>
            </div>
            <br />
            <h3 className="font-bold">3. Privacy and Copyright Protection</h3>
            <div className="indent">
              <p>
                Our privacy policies explain how we treat your personal data and
                protect your privacy when you use our Services.
              </p>
            </div>
            <br />
            <h3 className="font-bold">4. Your Content in our Services</h3>
            <div className="indent">
              <p>
                We may display content that does not belong to Company Name Web
                Development. This content is the sole responsibility of the
                entity that makes it available.
              </p>
            </div>
            <br />
            <h3 className="font-bold">
              5. Modifying and Terminating our Services
            </h3>
            <div className="indent">
              <p>
                We are constantly changing and improving our Services. We may
                add or remove functionalities or features, and we may suspend or
                stop a Service altogether.
              </p>
            </div>
            <br />
            <h3 className="font-bold">6. About these Terms</h3>
            <div className="indent">
              <p>
                We may modify these terms or any additional terms that apply to
                a Service to, for example, reflect changes to the law or changes
                to our Services.
              </p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServices;
