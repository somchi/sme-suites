import { capitalizeFirst } from '@/app/_libs/helpers';
import { StepIndicator } from './StepIndicator';

export const ToolNav = ({ slug }: { slug: string }) => {
  return (
    <div className="grid md:flex md:justify-between items-center mb-6">
      <div className="flex items-center gap-[6px]">
        <svg
          width="29"
          height="17"
          viewBox="0 0 29 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.375 8.5H27.625M1.375 8.5L8.875 1M1.375 8.5L8.875 16"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="text-xl">{capitalizeFirst(slug)} Generator</p>
      </div>
      <StepIndicator />
    </div>
  );
};
