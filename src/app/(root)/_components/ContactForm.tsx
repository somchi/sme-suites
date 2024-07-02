'use client';

import { Button } from '@/app/_components/ui/button';

export const ContactForm = () => {
  return (
    <div className="grid mt-20 gap-10">
      <div>
        <h2 className="text-2xl leading-9 font-medium">Join our newletter</h2>
        <div className="md:flex grid">
          <p className="text-xl md:w-1/3">
            We will like to reach out to you whenever there is and update
          </p>
          <form className="md:flex grid md:w-2/3 md:justify-end md:gap-16 gap-4 md:mt-0 mt-4">
            <input
              className="border border-gray-300 w-96 rounded-lg px-4 py-0 h-10
              focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-gray-400 focus-visible:ring-offset-1 
              "
              placeholder="Email address"
            />
            <Button className="w-80" variant="primary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div>
        <h2 className="text-2xl leading-9  font-medium">Contact us</h2>
        <div>
          <p className="text-xl">We will love to hear from you</p>
          <form className="md:flex grid md:justify-between md:gap-12 mt-4">
            <div className="md:w-1/2 w-full gap-3 grid">
              <div className="grid gap-1">
                <label className="font-medium">Name</label>
                <input
                  className="border border-gray-300 rounded-lg px-4 py-0 h-10
              focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-gray-400 focus-visible:ring-offset-1 
              "
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-1">
                <label className="font-medium">Email</label>
                <input
                  className="border border-gray-300 rounded-lg px-4 py-0 h-10
              focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-gray-400 focus-visible:ring-offset-1 
              "
                  placeholder="Email address"
                />
              </div>
              <div className="grid gap-1">
                <label className="font-medium">Phone</label>
                <input
                  className="border border-gray-300 rounded-lg px-4 py-0 h-10
              focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-gray-400 focus-visible:ring-offset-1 
              "
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full md:mt-0 mt-3">
              <div className="grid gap-1">
                <label className="font-medium">Message</label>
                <textarea
                  className="border border-gray-300 rounded-lg px-4 py-0
              focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-gray-400 focus-visible:ring-offset-1 
              "
                  placeholder="Enter your message"
                  rows={6}
                />
              </div>
              <div className="mt-4">
                <Button variant="primary" className="w-80">
                  Send
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
