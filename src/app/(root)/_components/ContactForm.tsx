'use client';

import { SnackBar } from '@/app/_components/Snackbar';
import { Button } from '@/app/_components/ui/button';
import ButtonLoader from '@/app/_components/ui/button-loader';
import { createClient } from '@/app/_utils/supabase/client';
import { FormEvent, useState } from 'react';

export const ContactForm = () => {
  const [data, setData] = useState<any>({} as any);
  const [load, setload] = useState<boolean>(false);
  const [success, setSuccess] = useState<{ msg: string; visible: boolean }>({
    msg: '',
    visible: false,
  });
  const [emailError, setError] = useState<string>('');
  const [subMsg, setSubMsg] = useState<any>({
    msg: '',
    visible: false,
    error: '',
    load: false,
  });

  const supabase = createClient();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const field = e.target.name;
    setData({ ...data, [field]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setload(true);
    if (emailError !== '') {
      setError('');
    }
    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setSuccess({
        msg: 'We have received your message, and we will respond shortly. Thanks!!',
        visible: true,
      });
      setData({});
      setload(false);
    } else {
      setError('Message was not sent');
    }
  };

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setSubMsg({ ...subMsg, load: true, error: subMsg.error ? '' : '' });
    const email = e.currentTarget.querySelector('input')?.value;
    const response = await supabase
      .from('NewletterSubscribers')
      .insert({ email });
    if (response.error) {
      setSubMsg({ ...subMsg, error: 'Failed to subscribe', load: false });
    } else {
      setSubMsg({
        msg: 'Thanks for subscribing to our newsletter',
        visible: true,
        load: false,
        ...subMsg,
      });
    }
  };

  return (
    <div className="grid mt-20 gap-10 relative">
      {subMsg.visible && (
        <SnackBar
          toggleVisibility={() =>
            setSubMsg({ msg: '', visible: false, error: '', load: false })
          }
          msg={subMsg.msg}
          time={3000}
        />
      )}

      <div>
        <h2 className="text-2xl leading-9 font-medium">Join our newsletter</h2>
        <h3 className="text-red-600 font-medium">{subMsg.error}</h3>
        <div className="md:flex grid ">
          <p className="text-xl md:w-1/3">
            We will like to reach out to you whenever there is and update
          </p>

          <form
            onSubmit={handleSubscribe}
            className="md:flex grid md:w-2/3 md:justify-end md:gap-16 gap-4 md:mt-0 mt-4"
          >
            <input
              className="border border-gray-300 w-96 rounded-lg px-4 py-0 h-10
              focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-gray-400 focus-visible:ring-offset-1 
              "
              placeholder="Email address"
              required
              name="email"
            />
            <Button className="w-80" variant="primary" disabled={subMsg.load}>
              {subMsg.load ? <ButtonLoader /> : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>
      <div className="relative">
        <h2 className="text-2xl leading-9  font-medium">Contact us</h2>
        {success.visible && (
          <SnackBar
            toggleVisibility={() => setSuccess({ msg: '', visible: false })}
            msg={success.msg}
            time={3000}
          />
        )}
        <div className="relative">
          <p className="text-xl">We will love to hear from you</p>
          <h3 className="text-theme-danger font-medium">{emailError}</h3>
          <form
            className="md:flex grid md:justify-between md:gap-12 mt-4"
            onSubmit={handleSubmit}
          >
            <div className="md:w-1/2 w-full gap-3 grid">
              <div className="grid gap-1">
                <label className="font-medium">Name</label>
                <input
                  className="border border-gray-300 rounded-lg px-4 py-0 h-10
              focus-visible:outline-none focus-visible:ring-1 
              focus-visible:ring-gray-400 focus-visible:ring-offset-1 
              "
                  placeholder="Your name"
                  name="name"
                  required
                  onChange={handleChange}
                  value={data.name ?? ''}
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
                  name="email"
                  required
                  value={data.email ?? ''}
                  onChange={handleChange}
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
                  name="phone"
                  onChange={handleChange}
                  value={data.phone ?? ''}
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
                  name="message"
                  required
                  value={data.message ?? ''}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <Button
                  variant="primary"
                  className="w-80"
                  disabled={load}
                  type="submit"
                >
                  {load && <ButtonLoader />}Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
