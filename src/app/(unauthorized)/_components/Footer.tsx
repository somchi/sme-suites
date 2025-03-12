import Image from 'next/image';
import Link from 'next/link';
import LOGO from '../../../../public/logo-white.png';

export const Footer = () => {
  return (
    <footer className="bg-theme-blue">
      <div className="flex flex-col max-w-[1400px] mt-0 mx-auto p-4 gap-4">
        <div className="md:flex grid md:justify-between gap-4">
          <div>
            <Image src={LOGO} alt="smesuites logo" />
          </div>
          <div className="grid md:flex md:justify-between text-white gap-x-20">
            <div>
              <h1 className="font-bold text-lg">Resources</h1>
              <ul>
                <li>
                  <Link href={'#tools'}>Tools</Link>
                </li>
                <li>
                  <Link href={'#'}>Login</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-lg">Company</h1>
              <ul>
                <li>
                  <Link href={'https://adventlabs.ng'}>About</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex mt-20 gap-4">
            <Link
              href="https://www.linkedin.com/company/smesuite/"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.51 8.796V10.493C12.8652 9.95154 13.355 9.51165 13.9314 9.21644C14.5078 8.92123 15.151 8.78083 15.798 8.809C19.253 8.809 20 10.969 20 13.779V19.5H16.8V14.428C16.8 13.218 16.556 11.662 14.672 11.662C12.845 11.662 12.533 12.979 12.533 14.338V19.5H9.34299V8.796H12.51ZM7.19999 6.106C7.1996 6.423 7.10563 6.73284 6.92987 6.99665C6.75411 7.26047 6.50438 7.46653 6.21199 7.589C5.91972 7.71048 5.59791 7.74226 5.28753 7.68029C4.97714 7.61832 4.69221 7.4654 4.46899 7.241C4.24536 7.01646 4.09311 6.73081 4.03138 6.41997C3.96966 6.10913 4.00123 5.78698 4.1221 5.49403C4.24298 5.20108 4.44778 4.95041 4.71074 4.77354C4.9737 4.59667 5.28309 4.5015 5.59999 4.5C5.81058 4.50013 6.01907 4.5418 6.21352 4.62263C6.40797 4.70346 6.58457 4.82186 6.7332 4.97104C6.88182 5.12023 6.99956 5.29726 7.07966 5.49202C7.15976 5.68677 7.20065 5.89542 7.19999 6.106Z"
                  fill="white"
                />
                <path d="M7.2 8.80859H4V19.4996H7.2V8.80859Z" fill="white" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/share/16BdSpBVu3"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.135 6H15V3H13.135C12.0369 3.00132 10.9841 3.43814 10.2076 4.21463C9.43114 4.99111 8.99432 6.04388 8.993 7.142V9H7V12H9V21.938H12V12H14.021L14.613 9H12V6.591C12.0023 6.43481 12.0655 6.28569 12.176 6.17532C12.2866 6.06496 12.4358 6.00207 12.592 6H13.135Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/smesuites?igsh=MWE5cHp5MDJjMHJieA==">
              <svg
                fill="white"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-lg text-white">
            Product of 
            <Link href={'https://adventlabs.ng'} target="_blank">
              Adventlabs Limited
            </Link>
          </p>
          <p className="text-lg text-white">
            Copyright © {new Date().getFullYear()}Buzthrive. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
