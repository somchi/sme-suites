import { Label } from '@/app/_components/ui/label';
import { FormControl } from '@/app/_components/ui/form-control';
import { Input } from '@/app/_components/ui/input';
import { redirect } from 'next/navigation';
import { DASHBOARD, REGISTER } from '@/site-setting/navigation';
import { MultiIput } from '@/app/_components/MultiInput';
import { SubmitButton } from '@/app/_components/SubmitButton';
import { headers } from 'next/headers';
import { createClient } from '@/app/_utils/supabase/server';

export const RegistrationForm = ({ searchParams }: { searchParams: any }) => {
  const signUp = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('fName') as string;
    const cPassword = formData.get('cPassword') as string;

    const supabase = createClient();
    const origin = headers().get('origin');

    if (password !== cPassword) {
      return redirect(`${REGISTER.href}?message=Password does not match`);
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${origin}/auth/callback`,
          data: { full_name: name },
        },
      });

      if (error) {
        return redirect(`${REGISTER.href}?message=${error.message}`);
      }

      return redirect(`${DASHBOARD.href}`);
    }
  };

  return (
    <>
      {searchParams?.message && (
        <h3 className="text-theme-danger font-medium">
          {searchParams?.message}
        </h3>
      )}
      <div className="grid">
        <form className="space-y-6">
          <FormControl>
            <Label className="font-medium" htmlFor="fName">
              Full name
            </Label>
            <Input
              placeholder="Your full name"
              required={true}
              name="fName"
              id="fName"
            />
          </FormControl>

          <FormControl>
            <Label className="font-medium" htmlFor="email">
              Email
            </Label>
            <Input
              placeholder="Enter email"
              required={true}
              name="email"
              type="email"
              id="email"
            />
          </FormControl>
          <FormControl>
            <div className="flex justify-between">
              <Label className="font-medium" htmlFor="password">
                Password
              </Label>
            </div>
            <MultiIput
              placeholder="Enter your password"
              required={true}
              name="password"
              id="password"
            />
          </FormControl>
          <FormControl>
            <div className="flex justify-between">
              <Label className="font-medium" htmlFor="cPassword">
                Confirm Password
              </Label>
            </div>
            <MultiIput
              placeholder="Enter your password"
              required={true}
              name="cPassword"
              id="cPassword"
            />
          </FormControl>
          <FormControl>
            <SubmitButton formAction={signUp} message={searchParams}>
              Sign up
            </SubmitButton>
          </FormControl>
        </form>
      </div>
    </>
  );
};
