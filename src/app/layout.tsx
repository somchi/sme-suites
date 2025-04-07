import type { Metadata } from 'next';
import { Forum, Lora } from 'next/font/google';
import './globals.css';
import { Menu } from './_components/Menu';
import { ThemeModeScript } from 'flowbite-react';
import { Footer } from './(unauthorized)/_components/Footer';
import { keywords } from '@/site-settings/keywords';
import { UnauthProvider } from './providers/unauth-provider';
import GoogleAnalytics from './_components/analytic';

const forum = Forum({
  style: ['normal'],
  weight: ['400'],
});

const lora = Lora({
  style: ['normal'],
  weight: ['400'],
  variable: '--font-lora',
});

const host =
  process.env.NEXT_PUPLIC_ENV === 'staging'
    ? 'https://staging.buzthrive.com'
    : 'https://www.buzthrive.com';

export const metadata: Metadata = {
  title:
    'SME suites | Simple and Lightweight tools for managing your sales and business activities',
  description:
    'Designed exclusively for micro, small, and medium scale businesses, our suite of tools fits your unique challenges. Seamlessly manage expenses, track income, sell online, track orders and much more.',
  icons: {
    icon: [{ url: '/logo/icon.png' }, new URL('/logo/icon.png', `${host}`)],
  },
  openGraph: {
    type: 'website',
    title:
      'SME suites | Simple and Lightweight tools for managing your sales and business activities',
    description:
      'Designed exclusively for micro, small, and medium scale businesses, our suite of tools fits your unique challenges. Seamlessly manage expenses, track income, sell online, track orders and much more.',
    url: `${host}`,
    siteName: 'SMESuites',
    images: [
      {
        url: `${host}/logo/icon.png`,
        width: 600,
        height: 300,
        alt: 'SMESuites logo',
      },
    ],
  },
  twitter: {
    title:
      'SME suites | Simple and Lightweight tools for managing your sales and business activities',
    description:
      'Designed exclusively for micro, small, and medium scale businesses, our suite of tools fits your unique challenges. Seamlessly manage expenses, track income, sell online, track orders and much more.',
    images: [
      { url: '/logo/icon.png', width: 400, height: 300 },
      new URL('/logo/icon.png', `${host}`),
    ],
  },
  robots: {
    index: process.env.NEXT_PUPLIC_ENV === 'staging' ? false : true,
    follow: process.env.NEXT_PUPLIC_ENV === 'staging' ? false : true,
    nocache: process.env.NEXT_PUPLIC_ENV === 'staging' ? false : true,
    googleBot: {
      index: process.env.NEXT_PUPLIC_ENV === 'staging' ? false : true,
      follow: process.env.NEXT_PUPLIC_ENV === 'staging' ? false : true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable}`}>
      <head>
        <ThemeModeScript />
      </head>

      <body className={`${forum.style} ${forum.className} antialiased`}>
        <div className="grid h-full">
          <div>
            <Menu />
            <UnauthProvider>{children}</UnauthProvider>
          </div>

          <Footer />
        </div>
      </body>
      <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
    </html>
  );
}
