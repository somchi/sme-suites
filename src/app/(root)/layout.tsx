import { Roboto } from 'next/font/google';
import { RootProvider } from './context/provider';

const montserrat = Roboto({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function OpenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-black">
      <RootProvider>{children}</RootProvider>
    </div>
  );
}
