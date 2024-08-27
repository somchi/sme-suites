import { FormFooter } from '@/app/_utils/types/auth';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
  title: string;
  description: string;
  formFooter?: FormFooter;
};

const AuthWrapper = ({ children, title, description, formFooter }: Props) => {
  return (
    <div className="w-full max-w-lg p-6 sm:p-10 bg-white rounded-lg shadow">
      <h2
        className="text-xl font-bold leading-7 tracking-tight text-gray-700"
        id="title"
      >
        {title}
      </h2>
      <p
        className="py-3 text-base font-medium text-gray-600 tracking-wide"
        id="description"
      >
        {description}
      </p>
      {children}
      <p className="text-xs text-gray-500 mt-6" id="footer-label">
        {formFooter?.title}{' '}
        {formFooter ? (
          <Link
            href={formFooter?.linkPath}
            className="font-semibold leading-6 text-theme-primary hover:text-indigo-500"
          >
            {formFooter?.action}
          </Link>
        ) : null}
      </p>
    </div>
  );
};

export default AuthWrapper;
