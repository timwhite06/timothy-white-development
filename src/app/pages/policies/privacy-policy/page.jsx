/* eslint-disable react/no-unescaped-entities */
export async function generateMetadata({ params: { slug } }) {
  return {
    title: 'Privacy Policy | Company Name',
    description:
      'Discover how Company Name protects your privacy and personal data. Read our Privacy Policy for detailed information.',
    openGraph: {
      type: 'article',
      url: `https://timothywhitedevelopment.com/${slug}`,
      title: 'Privacy Policy | Company Name',
      description:
        'Discover how Company Name protects your privacy and personal data. Read our Privacy Policy for detailed information.',
      images: '/images/logo.png',
      site_name: 'Company Name'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Privacy Policy | Company Name',
      description:
        'Discover how Company Name protects your privacy and personal data. Read our Privacy Policy for detailed information.',
      images: '/images/logo.png'
    },
    keywords:
      'privacy policy, data protection, personal data, Company Name, web development privacy, website privacy policy'
  };
}

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center">
      <div className="card max-w-[900px]">
        <div className="card-body">
          <h2 className="card-header text-4xl font-bold">Privacy Policy</h2>
          <p className="text-content2 text-2xl">
            Effective Date: {currentYear}
          </p>
          <br />
          <p>
            Company Name ("us", "we", or "our") operates the Company Name "Web"
            Development website (the "Service", timothywhitedevelopment.com).
          </p>
          <p>
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data.
          </p>
          <br />
          <h3 className="font-bold">Information Collection and Use</h3>
          <div className="indent">
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
          </div>
          <br />
          <h3 className="font-bold">Types of Data Collected</h3>
          <div className="indent">
            <h4>1)Personal Data</h4>
            <p>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). Personally identifiable
              information may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>
          </div>
          <br />

          <h3 className="font-bold">Use of Data</h3>
          <div className="indent">
            <p>Company Name uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Service
              </li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
          </div>
          <br />

          <h3 className="font-bold">Disclosure of Data</h3>
          <div className="indent">
            <p>
              We may disclose personal information that we collect, or you
              provide:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Legal Requirements:</strong> Company Name Web
                Development may disclose your Personal Data in the good faith
                belief that such action is necessary to:
                <ul className="list-disc list-inside ml-4">
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of Company Name
                    Web Development
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
              </li>
            </ul>
          </div>
          <br />

          <h3 className="font-bold">Security of Data</h3>
          <div className="indent">
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </div>
          <br />

          <h3 className="font-bold">Third-Party Services</h3>
          <div className="indent">
            <p>
              We use Google Analytics and Vercel Analytics to monitor and
              analyse the use of our Service. Google Analytics is a web
              analytics service offered by Google, and Vercel Analytics is a web
              analytics service offered by Vercel. Both services track and
              report website traffic.
            </p>
          </div>
          <br />

          <h3 className="font-bold">Children's Privacy</h3>
          <div className="indent">
            <p>
              Our Service is not intended for use by children under the age of
              16 and we do not knowingly collect personal data from children
              under 16.
            </p>
          </div>
          <br />

          <h3 className="font-bold">Changes to This Privacy Policy</h3>
          <div className="indent">
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              When it changes you can expect to find the updates on this page.
              Users with an account will be emailed about the changes.
            </p>
          </div>
          <br />

          <h3 className="font-bold">Contact</h3>
          <div className="indent">
            <p>
              If you have any questions about this Privacy Policy, please
              Contact us at:{' '}
              <a href="mailto:timothywhitedevelopment@gmail.com">
                timothywhitedevelopment@gmail.com
              </a>
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
