import AuthWrapper from '../_components/authWrapper';
import { PRODUCT_NAME } from '@/app/_utils/contants';
import { REGISTER } from '@/site-setting/navigation';
import { LoginForm } from '../_components/loginForm';

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <AuthWrapper
      title="Sign in"
      description={`Access the ${PRODUCT_NAME} platform using your email and password.`}
      formFooter={{
        title: 'New on our platform?',
        action: 'Create new account',
        linkPath: REGISTER.href,
      }}
    >
      <LoginForm searchParams={searchParams} />
    </AuthWrapper>
  );
}
