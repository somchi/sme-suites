const Footer = () => {
  return (
    <footer className="bg-theme-darkBlue">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between gap-12">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="self-center text-white text-2xl font-semibold whitespace-nowrap font-mono italic">
                SMESuites
              </span>
            </a>

            <div className="flex mt-4 pt-4 sm:justify-start sm:mt-0 md:pr-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/smesuite/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Contacts
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    info@smesuites.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Address
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline ">
                    12 St Bernards Avenue, Emene, Enugu.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 sm:mx-auto dark:border-gray-900 lg:my-8" />

        <div className="flex flex-col md:items-center md:justify-center">
          <span>
            Product of{' '}
            <a
              href="https://adventlabs.ng"
              target="_blank"
              className="cursor-pointer text-blue-500"
            >
              Adventlabs Limited
            </a>
          </span>
          <span className="text-sm text-gray-500 md:text-center text-start dark:text-gray-400">
            © 2024{' '}
            <a href="/" className="hover:underline">
              SMESuites
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
