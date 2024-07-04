import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';

const Soon = ({
  title,
  description,
  link,
  img,
}: {
  title: string;
  description: string;
  link: string;
  img: string;
}) => {
  return (
    <div className="relative rounded w-full">
      <div>
        <Image src={img} alt="order tracking" width={700} height={500} />
      </div>
      <div className="absolute z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/50 rounded">
        <div className="absolute text-theme-gray rounded-lg bottom-0 py-20 px-12">
          <div className="grid items-end justify-center">
            <h2 className="text-center text-white text-2xl font-medium">
              {title}
            </h2>
            <p className="text-center text-white text-xl">{description}</p>
          </div>
        </div>
        <div className="absolute bottom-[-20px] left-[35%] pt-20">
          <Button className="w-40" variant="primary">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ComingSoon = () => {
  return (
    <section className="my-10" id="coming soon">
      <div className="">
        <h2 className="text-3xl font-semibold my-6">
          What is <span className="text-theme-primary">Coming Soon</span>
        </h2>
        <div className="md:flex grid md:justify-between gap-6">
          <Soon
            title="Order Tracker"
            description=" Manage your orders seamlessly from start to finish. Track orders
              in real-time, streamline fulfillment processes, and deliver
              exceptional customer service."
            link=""
            img="/order.png"
          />
          <Soon
            title="Finance Insights"
            description="Gain valuable insights into your business’s financial performance. Monitor revenue, track profits, and make informed decisions to drive your entrepreneurial success."
            link=""
            img="/finance.png"
          />
        </div>
      </div>
    </section>
  );
};
