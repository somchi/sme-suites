type Props = {
  step: string;
  description: string;
  last: boolean;
  active: boolean;
};

export const Flow = ({ step, description, last, active }: Props) => {
  return (
    <div className={`flex flex-col ${last ? 'w-48 md:w-[95px]' : 'w-48'}`}>
      <div className="flex items-center gap-10">
        <div
          className={`${
            active ? 'border-blue-600' : 'border-white'
          } w-[45px] h-[45px] border rounded-3xl flex items-center justify-center p-1`}
        >
          <svg
            className={`w-6 h-6 ${active ? 'text-blue-600' : 'text-gray-800'} `}
            aria-hidden="true"
            xmlns="http://www.w3. org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
            />
          </svg>
        </div>
        {!last ? <div className="w-[100px] border-2 bg-gray-900"></div> : null}
      </div>
      <div className="grid">
        <p className="py-4 text-xs text-gray-400">{step}</p>
        <h3 className="text-sm">{description}</h3>
      </div>
    </div>
  );
};
