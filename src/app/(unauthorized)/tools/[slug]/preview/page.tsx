import { capitalizeFirst } from '@/app/_libs/helpers';
import { Action } from '../../_components/Action';
import { PreviewPage } from '../../_components/PreviewPage';

const ReceiptPreview = async ({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) => {
  const { slug } = await params;
  return (
    <div className="grid">
      <div className="flex flex-col text-balance w-full">
        <h1 className="font-bold text-3xl text-center text-gray-900">
          {capitalizeFirst(slug)} Preview
        </h1>
      </div>
      <div className="mb-4 rounded md:p-6 p-2">
        <div className="grid md:flex gap-8">
          <div className="grid md:order-1 order-2 w-full md:w-3/4 bg-gray-50 rounded-lg shadow-inner">
            <PreviewPage slug={slug} />
          </div>
          <div className="gird md:order-2 order-1 w-full md:w-1/4 bg-gray-50 rounded-lg shadow-inner">
            <Action slug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;
