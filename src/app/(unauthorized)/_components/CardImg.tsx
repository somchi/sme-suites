import Image from 'next/image';

type Props = {
  children: React.ReactNode;
  img: string;
};
export const CardWImage = ({ children, img }: Props) => {
  return (
    <div
      className="flex bg-white border border-gray-200 
        rounded-lg shadow-sm hover:bg-gray-100 h-full"
    >
      <div className="w-full md:w-1/3 h-full relative">
        <Image
          src={img}
          alt="create"
          fill
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        />
      </div>
      {children}
    </div>
  );
};
