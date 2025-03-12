import Link from 'next/link';

type Props = {
  href: string;
  text: string;
  fill: string;
  className: string;
  disabled: boolean;
};
export const LinkButton = ({
  href,
  text,
  fill,
  className,
  disabled,
}: Props) => {
  return (
    <Link
      className={`rounded-xl flex items-center justify-center px-4 py-2 text-center ${className} ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      href={href}
      target="_blank"
      aria-disabled={disabled}
    >
      <span className="flex items-stretch transition-all duration-200 rounded-md text-sm">
        {text}
      </span>
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill={fill}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M13.232 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v5.768a1 1 0 1 1-2 0V6.414l-6.182 6.182a1 1 0 0 1-1.414-1.414L17.586 5h-3.354a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};
