import { ToolNav } from '../_components/Nav';
import { Content } from '../_components/Content';

const Tools = async ({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) => {
  const { slug } = await params;
  return (
    <div className="flex flex-col justify-self-center max-w-[1400px] w-full">
      <div className="grid mx-auto p-4 w-full">
        <ToolNav slug={slug} />
        <Content slug={slug} />
      </div>
    </div>
  );
};

export default Tools;
