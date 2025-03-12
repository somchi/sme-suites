import { buttonTheme } from '@/app/asset/theme';
import { Button } from 'flowbite-react';
import Image from 'next/image';

export const Tool = ({
  imgLeft,
  description,
  title,
  link,
  img,
}: {
  imgLeft: boolean;
  description: string;
  title: string;
  link: string;
  img: string;
}) => {
  return (
    <div className="md:flex grid">
      <div
        className={`${
          imgLeft ? 'md:order-1' : 'md:order-2'
        } md:w-1/3 w-full shadow-lg rounded flex items-center justify-center `}
      >
        <div className="h-[280px] w-[280px] md:h-full md:w-full relative">
          <Image
            src={img}
            alt="invoice generation"
            fill
            className="object-contain w-full"
          />
        </div>
      </div>
      <div
        className={`${
          imgLeft ? 'md:order-2 items-end' : 'md:order-1 items-start'
        } flex flex-col shadow py-8 px-14 rounded md:w-2/3 w-full`}
      >
        <h3 className="m-0 text-2xl font-medium leading-loose">{title}</h3>
        <p
          className={`${
            imgLeft ? 'text-end' : 'text-start'
          } m-0 text-xl leading-9 md:w-3/4 text-theme-subText`}
        >
          {description}
        </p>
        <Button
          className="w-60 md:w-80"
          color="primary"
          theme={buttonTheme}
          disabled={link ? false : true}
        >
          <a href={link} target="_blank">
            {link ? 'Get started' : 'Coming Soon'}
          </a>
        </Button>
      </div>
    </div>
  );
};
