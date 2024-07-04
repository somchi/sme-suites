import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import Img from '../../../../public/buzthrive.png';

export const Buzthrive = () => {
  return (
    <section className="my-10">
      <div>
        <h2 className="text-3xl font-semibold">
          What is <span className="text-theme-primary">Buzthrive</span>
        </h2>
        <div className="grid my-6">
          <div className="relative">
            <Image src={Img} alt="Buzthrive" />
          </div>
        </div>
        <p className="text-2xl text-theme-subText leading-9">
          <span className="font-bold text-black">Buzthrive</span> helps you to
          manage your business smarter and our solution enhances business
          operations, providing a powerful tool for seamless inventory
          management, optimizing sales through a user-friendly POS, and
          strengthening customer relationships with a robust CRM.
        </p>
        <div className="grid mt-8">
          <Button className="w-80 flex justify-self-center" variant="primary">
            <a href="https://www.buzthrive.com" target="_blank">
              Learn more
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
