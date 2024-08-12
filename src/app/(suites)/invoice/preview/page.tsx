import { Action } from '../_components/Action';
import { PreviewIPage } from '../_components/PreviewPage';

export default function page() {
  return (
    <div className="grid">
      <div className="flex flex-col text-balance w-full mt-[-4rem]">
        <h1 className="font-bold text-3xl text-center text-gray-900">
          Invoice Preview
        </h1>
      </div>
      <div className="bg-[#e2e2e2] mb-4 rounded md:p-6 p-2">
        <div className="grid md:flex gap-8">
          <div className="grid md:order-1 order-2 w-full md:w-3/4 bg-white rounded">
            <PreviewIPage />
          </div>
          <div className="gird md:order-2 order-1 w-full md:w-1/4 bg-white rounded">
            <Action />
          </div>
        </div>
      </div>
    </div>
  );
}
