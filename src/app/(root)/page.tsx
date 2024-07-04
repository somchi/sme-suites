import Footer from './_components/Footer';
import NavBar from './_components/Navbar';
import { Banner } from './_components/Banner';
import { Tools } from './_components/Tools';
import { Buzthrive } from './_components/Buzthrive';
import { ComingSoon } from './_components/ComingSoon';
import { GetStarted } from './_components/GetStarted';
import { Contact } from './_components/Contact';

export default async function Index() {
  return (
    <>
      <main className="flex flex-col md:py-6 md:px-16 p-8 items-center">
        <div className="flex flex-col max-w-screen-2xl min-w-full">
          <NavBar />
        </div>
        <div className="flex flex-col max-w-screen-2xl">
          <Banner />
          <Tools />
          <Buzthrive />
          <ComingSoon />
          <GetStarted />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
