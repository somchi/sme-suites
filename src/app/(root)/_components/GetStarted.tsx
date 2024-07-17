const Card = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="shadow-md rounded p-4 md:w-1/3 w-full">
      <div className="bg-theme-secondary h-10 w-10 mb-2 grid items-center justify-center">
        <span className="text-white font-medium">{number}</span>
      </div>
      <div>
        <h3 className="text-2xl font-medium leading-9 my-1">{title}</h3>
        <h6 className="text-xl">{description}</h6>
      </div>
    </div>
  );
};

export const GetStarted = () => {
  return (
    <section className="my-10">
      <div>
        <h2 className="text-3xl font-semibold">
          How to <span className="text-theme-secondary">Get Started!</span>
        </h2>
        <div className="md:flex grid md:justify-between gap-4 my-8">
          <Card
            number="1"
            title="Vist our website"
            description="www.smesuites.com"
          />
          <Card
            number="2"
            title="Get started"
            description="Click on any of the tools to get started"
          />
          <Card
            number="3"
            title="Enjoy the features!"
            description="Proceed with the features"
          />
        </div>
      </div>
    </section>
  );
};
