import { Montserrat } from 'next/font/google';
import './globals.css';
import { keywords } from '@/site-setting/keywords';

const montserrat = Montserrat({ subsets: ['latin'] });
const host = 'https://www.smesuites.com';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.NEXT_PUBLIC_PORT}`;

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title:
    'SME suites | Simple and Lightweight tools for managing your sales and business activities',
  description:
    'Designed exclusively for micro, small, and medium scale businesses, our suite of tools fits your unique challenges. Seamlessly manage expenses, track income, sell online, track orders and much more.',
  icons: {
    icon: [{ url: '/icon.png' }, new URL('/icon.png', `${host}`)],
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
        url: `${host}`,
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
      { url: '/icon.png', width: 400, height: 300 },
      new URL('/icon.png', `${host}`),
    ],
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  },
  keywords: keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="grid text-foreground">{children}</body>
    </html>
  );
}
