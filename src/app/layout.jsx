import { Montserrat } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { Suspense } from 'react';
import Loading from './loading';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const font = Montserrat({
  subsets: ['latin'],
  weight: '400'
});

export const metadata = {
  metadataBase: new URL('https://timothywhitedevelopment.com'),
  title: {
    default: 'Timothy White',
    template: '%s | Timothy White'
  },
  description: 'A Personal Portfolio.',
  openGraph: {
    type: 'website',
    url: 'https://timothywhitedevelopment.com',
    title: 'Timothy White',
    description: 'A Personal Portfolio.',
    images: '/images/logo.png',
    site_name: 'Timothy White',
    keywords:
      'Timothy White, tim white web development, Timothy White website development, tim white website development, website design, timothy white portfolio, timothy white web developer, timothy white web designer'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timothy White',
    description: 'A Personal Portfolio.',
    images: '/images/logo.png'
  },
  keywords:
    'Timothy White, tim white web development, Timothy White website development, tim white website development, website design, web developer, website development services, web development agency, professional web developer'
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
          <div className="w-full h-full flex flex-col relative">
            <Header />
            <main className="max-w-full w-full ml-auto mr-auto relative flex-grow mt-[80px]">
              <div className="w-full flex-grow min-h-screen">{children}</div>
            </main>
            <footer className="w-full flex justify-center">
              <Footer />
            </footer>
          </div>
        </Suspense>
      </body>
    </html>
  );
}
