import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import Manager from '@/components/ClientStoreManager/manager';
import { Suspense } from 'react';
import Loading from './loading';

const font = Montserrat({
  subsets: ['latin'],
  weight: '400'
});

export const metadata = {
  metadataBase: new URL('https://company-url.com'),
  title: {
    default: 'Company Name',
    template: '%s | Company Name'
  },
  description: 'Company slogan',
  openGraph: {
    type: 'website',
    url: 'https://timothywhitedevelopment.com',
    title: 'Company Name',
    description: 'Company slogan',
    images: '/images/logo.png',
    site_name: 'Company Name',
    keywords:
      'Company Name, tim white web development, Company Name website development, tim white website development, website design, web developer, website development services, web development agency, professional web developer'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Name',
    description: 'Company slogan',
    images: '/images/logo.png'
  },
  keywords:
    'Company Name, tim white web development, Company Name website development, tim white website development, website design, web developer, website development services, web development agency, professional web developer'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://kit.fontawesome.com/289aa77e1d.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />

      <body className={font.className}>
        <Analytics />
        <SpeedInsights />
        <Suspense fallback={<Loading />}>
          <Manager />
          <div className="w-full h-full flex flex-col relative">
            <Header />
            <main className="max-w-[1800px] w-full ml-auto mr-auto relative flex-grow mt-[80px]">
              <div className="w-full flex-grow min-h-screen">{children}</div>
            </main>
            <footer className="w-full flex justify-center bg-[#111111] mt-auto">
              <Footer />
            </footer>
          </div>
        </Suspense>
      </body>
    </html>
  );
}