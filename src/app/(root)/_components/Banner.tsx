import { Button } from '@/app/_components/ui/button';
import { BadgeCheck, CircleArrowOutUpRight } from 'lucide-react';

export const Banner = () => {
  return (
    <div className="grid md:my-20 my:12 text-black" id="about">
      <div className="flex flex-col items-center">
        <h2 className="text-black font-medium text-5xl leading-relaxed text-center">
          Empower Your Enterprise,
        </h2>
        <h2 className="text-black font-medium text-5xl text-center">
          Scale for Success and{' '}
          <span className="text-theme-secondary">Amplify Performance</span>
        </h2>
        <p className="text-theme-subText m-0 mt-8 text-2xl md:text-center text-start">
          Unlock the Potential of Your Client Value Delivery with Invoicing,
          Agreements, Payments and Essential Tools
        </p>
      </div>
      <div className="grid md:flex items-center my-20 gap-3">
        <div className="flex justify-bewteen shadow md:w-1/3 w-full p-4 h-40">
          <span className="text-3xl font-medium">
            Create your <span className="text-theme-primary">invoice</span> with
            one click!
          </span>
          <div className="flex w-2/3 justify-end items-end">
            <a href="/invoice" target="_blank">
              <CircleArrowOutUpRight className="text-theme-primary" />
            </a>
          </div>
        </div>
        <div className="grid md:flex shadow md:justify-between md:w-2/3 px-4 py-2 bg-theme-lightBlue md:h-40">
          <span className="text-2xl">Making business greater</span>
          <div className="flex flex-col md:w-2/3 w-full mt-4 md:justify-self-end items-center bg-white p-4">
            <BadgeCheck className="text-theme-primary" />
            <span className="text-lg">Invoice generated and uploaded</span>
            <Button className="bg-theme-primary/10 text-theme-primary hover:bg-theme-primary/10">
              <a href="/invoice" target="_blank">
                Create invoice
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
