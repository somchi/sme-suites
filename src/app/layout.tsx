import { GeistSans } from 'geist/font/sans';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.NEXT_PUBLIC_PORT}`;

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'SMESuite',
  description: '',
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
