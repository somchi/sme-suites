import AuthWrapper from '../_components/authWrapper';
import { PRODUCT_NAME } from '@/app/_utils/contants';
import { REGISTER } from '@/site-setting/navigation';
import { RegistrationForm } from '../_components/registerForm';

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <AuthWrapper
      title="Sign up"
      description={`Create your ${PRODUCT_NAME} account`}
      formFooter={{
        title: 'Already have an account?',
        action: 'Sign in instead',
        linkPath: REGISTER.href,
      }}
    >
      <RegistrationForm searchParams={searchParams} />
    </AuthWrapper>
  );
}
