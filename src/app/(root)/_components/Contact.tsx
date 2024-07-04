import { Button } from '@/app/_components/ui/button';
import { ContactForm } from './ContactForm';

export const Contact = () => {
  return (
    <section className="mt-10 mb-20" id="contact">
      <div>
        <div className="grid bg-theme-primary shadow rounded justify-center items-center">
          <div className="grid py-20 gap-8">
            <h1 className="text-white text-5xl font-medium text-center">
              What are you waiting for?
            </h1>
            <h2 className="text-white text-2xl font-medium text-center">
              Click on the button below to get started
            </h2>
            <div className="grid justify-center">
              <Button className="w-60 bg-white text-theme-primary hover:bg-white hover:border hover:border-theme-primary">
                <a href="/#tools">Get started</a>
              </Button>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
