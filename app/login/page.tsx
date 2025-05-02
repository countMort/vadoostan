'use client';
import { errorToast, LoginHeader, Otp, successToast } from '@/app/components';
import { useState } from 'react';
import { LoginForm } from './form';
import { useRouter } from 'next/navigation';
import { useLogin } from '@/services/services';

type LoginPageStatus = 'login' | 'otp';

const Login = () => {
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useState<LoginPageStatus>('login');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const { mutate: onLogin, isPending } = useLogin();

  const handleOnback = () => {
    if (loginStatus === 'login') {
      router.back();
    } else if (loginStatus === 'otp') {
      setLoginStatus('login');
    }
  };
  const onVerifyOtp = () => {
    router.push('/experience-list');
  };
  const onSubmitForm = (phoneNumber?: string) => {
    if (phoneNumber) {
      onLogin(
        { client: 'web', mobileNumber: phoneNumber },
        {
          onSuccess(data) {
            setLoginStatus('otp');
            successToast({ message: data.message });
            setPhoneNumber(phoneNumber);
          },
          onError(error) {
            errorToast({ message: error.message });
          },
        }
      );
    }
  };
  return (
    <>
      <LoginHeader
        style={{ marginBlockStart: 70, marginBlockEnd: 50 }}
        onBack={handleOnback}
        title={loginStatus === 'login' ? 'ورود' : 'تایید شماره موبایل'}
      />
      {loginStatus === 'login' ? (
        <LoginForm isPending={isPending} onSubmitForm={onSubmitForm} />
      ) : (
        <Otp mode='login' phoneNumber={phoneNumber} onVerify={onVerifyOtp} />
      )}
    </>
  );
};

export default Login;
