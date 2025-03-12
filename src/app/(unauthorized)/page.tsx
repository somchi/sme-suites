import { Banner } from './_components/Banner';
import { HowItWorks } from './_components/How';
import { Summary } from './_components/Summary';
import { Tools } from './_components/Tools';
import { WhyUs } from './_components/WhyUs';

export default function Home() {
  return (
    <main className=" mt-8 ">
      <Banner />
      <WhyUs />
      <Tools />
      <HowItWorks />
      <Summary />
    </main>
  );
}
