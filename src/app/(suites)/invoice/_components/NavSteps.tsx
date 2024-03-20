import { memo } from 'react';

type Props = {
  currentIndex: number;
  previousComponent?: () => void;
  nextComponent?: () => void;
  disable: boolean;
};

export const NavSteps = memo(
  ({ currentIndex, nextComponent, previousComponent, disable }: Props) => {
    return (
      <div className="grid md:flex md:justify-between mt-8">
        <div
          className="p-3 w-full lg:w-[100px] bg-red-500 cursor-pointer shadow-sm rounded-lg text-blue-700 border bg-blue-400 focus:border-blue-800 dark:text-white hover:bg-red-600"
          style={{
            visibility: currentIndex === 0 ? 'hidden' : 'visible',
          }}
        >
          <button
            type="button"
            onClick={previousComponent}
            className="flex items-center justify-center gap-2"
          >
            <svg
              className="w-6 h-6 text-gray-100 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
            <h3 className="text-white">Back</h3>
          </button>
        </div>

        <div className="flex">
          {currentIndex == 2 ? (
            <button
              type="submit"
              disabled={disable}
              className="py-3 px-3 bg-blue-400 hover:bg-[#4884DA] transition duration-200 ease-in-out rounded-lg w-full lg:w-52 focus:ring-blue-500  mt-8  lg:mt-0 focus:ring-offset-blue-200 text-white text-center text-base font-semibold shadow-md  disabled:cursor-not-allowed disabled:bg-slate-500"
            >
              Generate Invoice
            </button>
          ) : (
            <button
              onClick={nextComponent}
              type="submit"
              disabled={disable}
              className="py-3 px-3 bg-blue-600 hover:bg-blue-700 rounded-lg 
              w-full md:w-52 
              text-white text-center font-semibold 
              shadow-md disabled:cursor-not-allowed disabled:bg-slate-500"
            >
              Save and Continue
            </button>
          )}
        </div>
      </div>
    );
  }
);

NavSteps.displayName = 'Steps';
