import { GeistSans } from 'geist/font/sans';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.NEXT_PUBLIC_PORT}`;

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title:
    'SME suites | Simple and Lightweight tools for managing your sales and business activities',
  description:
    'Designed exclusively for micro, small, and medium scale businesses, our suite of tools fits your unique challenges. Seamlessly manage expenses, track income, sell online, track orders and much more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="flex flex-col">{children}</main>
      </body>
    </html>
  );
}
