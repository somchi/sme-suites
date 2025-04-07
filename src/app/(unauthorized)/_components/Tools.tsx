import { PUBLIC_INVOICE, PUBLIC_RECEIPT } from '@/site-settings/navigation';
import { Tool } from './Tool';

export const Tools = () => {
  return (
    <section id="tools" className="max-w-[1400px] mx-auto p-4 mt-10">
      <div className="grid justify-self-center md:w-1/2 gap-6">
        <div className="flex justify-center gap-2">
          <hr className="bg-theme-primary w-[1px] h-[24px]" />
          <h4 className="text-theme-primary font-semibold">Our Tools</h4>
        </div>
        <h1 className="font-semibold text-3xl text-center">
          Powerful Tools to Grow Your Business
        </h1>
        <h2 className="text-gray-500 text-center text-lg">
          Our platform equips you with the essential tools to kickstart and grow
          your business—whether you&apos;re a freelancer, an online seller, or a
          small business owner. We&apos;ve got you covered!
        </h2>
      </div>
      <div className="text-black mt-4">
        <div className="flex flex-col md:gap-24 gap-14">
          <Tool
            imgLeft={false}
            title="Generate Invoices"
            description="Easily create professional invoices tailored to your businesses.
          Impress clients with polished documents that reflect your
          professionalism"
            link={PUBLIC_INVOICE.href}
            img="/invoice.png"
          />
          <Tool
            imgLeft={false}
            title="Generate Receipt"
            description="Easily create professional receiptd tailored to your businesses.
          Impress clients with polished documents that reflect your
          professionalism"
            link={PUBLIC_RECEIPT.href}
            img="/inventory.png"
          />
          <Tool
            img="/productCost.png"
            imgLeft={false}
            title="Inventory Management"
            description="Take control of your inventory. Never run out of essential supplies again with our intuitive inventory and sales management system."
            link="https://www.buzthrive.com"
          />
          <Tool
            imgLeft={false}
            title="Order Tracking"
            description="Manage your orders seamlessly from start to finish. Track orders
              in real-time, streamline fulfillment processes, and deliver
              exceptional customer service"
            link=""
            img="/order.png"
          />
          <Tool
            img="/finance.png"
            imgLeft={false}
            title="Product Cost Management"
            description="Stay on top of your expenses effortlessly. Manage and track product costs efficiently to ensure maximum profitability for your sales."
            link=""
          />
          <Tool
            img="/stock.png"
            imgLeft={false}
            title="Stock Tracking"
            description="Keep tabs on your product stock levels with precision. Ensure timely restocking and avoid missed opportunities with our stock tracking feature."
            link=""
          />
        </div>
      </div>
    </section>
  );
};
