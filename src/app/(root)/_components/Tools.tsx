import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';

const Tool = ({
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
    <div className="md:flex grid gap-4">
      <div
        className={`${
          imgLeft ? 'md:order-1' : 'md:order-2'
        } md:w-1/3 w-full shadow-lg rounded`}
      >
        <div className="h-80 w-full relative">
          <Image src={img} alt="invoice generation" fill />
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
          className="w-80"
          variant="primary"
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

export const Tools = () => {
  return (
    <section id="tools">
      <div className="text-black">
        <h2 className="text-3xl font-semibold">
          Shall we <span className="text-theme-secondary">dive deeper?</span>
        </h2>
        <div className="grid md:gap-24 gap-14">
          <Tool
            imgLeft={true}
            title="Generate Invoices"
            description="Easily create professional invoices tailored to your businesses.
          Impress clients with polished documents that reflect your
          professionalism"
            link="/invoice"
            img="/invoice.png"
          />

          <Tool
            img="/productCost.png"
            imgLeft={false}
            title="Product Cost Management"
            description="Stay on top of your expenses effortlessly. Manage and track product costs efficiently to ensure maximum profitability for your sales."
            link=""
          />
          <Tool
            imgLeft={true}
            title="Generate Receipt"
            description="Easily create professional receiptd tailored to your businesses.
          Impress clients with polished documents that reflect your
          professionalism"
            link="/receipt"
            img="/invoice.png"
          />
          <Tool
            img="/inventory.png"
            imgLeft={false}
            title="Inventory Management"
            description="Take control of your inventory. Never run out of essential supplies again with our intuitive inventory and sales management system."
            link="https://www.buzthrive.com"
          />
          <Tool
            img="/stock.png"
            imgLeft={true}
            title="Stock Tracking"
            description="Keep tabs on your product stock levels with precision. Ensure timely restocking and avoid missed opportunities with our stock tracking feature."
            link=""
          />
        </div>
      </div>
    </section>
  );
};
