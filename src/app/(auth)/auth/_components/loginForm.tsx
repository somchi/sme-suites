import { Label } from '@/app/_components/ui/label';
import { FormControl } from '@/app/_components/ui/form-control';
import { Input } from '@/app/_components/ui/input';
import { redirect } from 'next/navigation';
import { createClient } from '@/app/_utils/supabase/client';
import { DASHBOARD, LOGIN } from '@/site-setting/navigation';
import { SubmitButton } from '@/app/_components/SubmitButton';
import { MultiIput } from '@/app/_components/MultiInput';

export const LoginForm = ({ searchParams }: { searchParams: any }) => {
  const signIn = async (formData: FormData) => {
    'use server';
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return redirect(`${LOGIN.href}?message=${error.message}`);
    }
    return redirect(`${DASHBOARD.href}`);
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
              <Label className="text-xs cursor-pointer font-medium text-theme-primary">
                Forgot Password?
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
            <SubmitButton formAction={signIn} message={searchParams}>
              Sign in
            </SubmitButton>
          </FormControl>
        </form>
      </div>
    </>
  );
};
