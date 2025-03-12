import { CardWLink } from './Card';

export const WhyUs = () => {
  return (
    <div className="grid max-w-[1400px] mx-auto p-4 mt-10">
      <div className="grid justify-self-center md:w-1/2 gap-6">
        <div className="flex justify-center gap-2">
          <hr className="bg-theme-primary w-[2px] h-[24px]" />
          <h4 className="text-theme-primary font-semibold">Why us</h4>
        </div>
        <h1 className="font-semibold text-3xl text-center">
          The smart choice for you
        </h1>
        <h2 className="text-gray-500 text-center text-lg">
          Our platform makes it easy to find the right professional for your
          needs, guiding you through a simple, step-by-step process.
        </h2>
      </div>
      <div className="flex flex-wrap my-8 gap-5 justify-center">
        <CardWLink
          title="Save Time & Effort"
          description="Reduce manual work, and focus on what truly matters for your business."
          bgColor="bg-theme-primary/10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8406 10.1158L21.4481 5.32897C21.36 5.15278 21.238 4.99568 21.0892 4.86664C20.9403 4.7376 20.7675 4.63915 20.5806 4.5769C20.3937 4.51465 20.1963 4.48984 19.9998 4.50387C19.8033 4.51789 19.6115 4.57049 19.4353 4.65866L17.1038 5.82397L12.1922 4.5246C12.0662 4.4918 11.9339 4.4918 11.8078 4.5246L6.89627 5.82397L4.56471 4.65866C4.38853 4.57049 4.19672 4.51789 4.00022 4.50387C3.80371 4.48984 3.60637 4.51465 3.41946 4.5769C3.23255 4.63915 3.05973 4.7376 2.91087 4.86664C2.76201 4.99568 2.64003 5.15278 2.5519 5.32897L0.159395 10.1149C0.0712288 10.2911 0.0186297 10.4829 0.00460137 10.6794C-0.00942693 10.8759 0.0153904 11.0732 0.0776361 11.2602C0.139882 11.4471 0.238337 11.6199 0.367378 11.7687C0.496419 11.9176 0.65352 12.0396 0.829708 12.1277L3.36096 13.3943L8.56315 17.1096C8.6398 17.1641 8.72596 17.2039 8.81721 17.2268L14.8172 18.7268C14.9429 18.7583 15.0745 18.7567 15.1994 18.7222C15.3243 18.6877 15.4381 18.6215 15.5297 18.5299L20.6925 13.3662L23.1694 12.1277C23.525 11.9497 23.7953 11.6378 23.921 11.2605C24.0467 10.8833 24.0175 10.4716 23.8397 10.1158H23.8406ZM18.6947 13.2443L15.4688 10.6605C15.3243 10.5448 15.142 10.4866 14.9572 10.4972C14.7723 10.5077 14.5979 10.5863 14.4675 10.7177C12.7978 12.3996 10.9369 12.1868 9.75002 11.4368L13.8038 7.49928H16.786L19.3369 12.6002L18.6947 13.2443ZM3.89346 5.99928L5.81252 6.95741L3.41533 11.7433L1.50002 10.7862L3.89346 5.99928ZM14.7685 17.1677L9.32065 15.8065L4.70815 12.5121L7.33315 7.2621L12 6.02553L12.9188 6.26835L8.70002 10.3633L8.69252 10.3718C8.53371 10.5306 8.41259 10.723 8.3381 10.9349C8.2636 11.1468 8.23764 11.3727 8.26211 11.5959C8.28659 11.8192 8.36088 12.0341 8.47951 12.2248C8.59814 12.4155 8.75808 12.5771 8.94752 12.6977C10.875 13.9287 13.201 13.729 15.0328 12.229L17.625 14.3112L14.7685 17.1677ZM20.581 11.7424L18.1885 6.96116L20.1066 5.99928L22.5 10.7862L20.581 11.7424ZM12.3544 20.4302C12.3139 20.5923 12.2204 20.7362 12.0888 20.8392C11.9571 20.9421 11.7949 20.9981 11.6278 20.9983C11.5662 20.9983 11.5048 20.9907 11.445 20.9758L7.53846 19.999C7.44709 19.9764 7.36086 19.9367 7.2844 19.8818L4.81408 18.1174C4.66219 17.9981 4.56215 17.8249 4.53481 17.6337C4.50746 17.4426 4.5549 17.2482 4.66726 17.0911C4.77962 16.9341 4.94824 16.8264 5.138 16.7906C5.32776 16.7547 5.52404 16.7934 5.68596 16.8987L8.04002 18.5805L11.8125 19.5218C12.0055 19.57 12.1713 19.693 12.2736 19.8635C12.376 20.034 12.4064 20.2382 12.3581 20.4312L12.3544 20.4302Z"
              fill="#3961F1"
            />
          </svg>
        </CardWLink>

        <CardWLink
          title="Improve Efficiency"
          description="Streamline operations, enhance productivity, and keep everything organized in one place."
          bgColor="bg-theme-blue"
        >
          <svg
            className="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
            />
          </svg>
        </CardWLink>
        <CardWLink
          title="Scale with Ease"
          description="Adapt to business growth effortlessly with flexible tools that grow with you."
          bgColor="bg-theme-secondary"
        >
          <svg
            className="w-6 h-6 text-white dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </CardWLink>
      </div>
    </div>
  );
};
