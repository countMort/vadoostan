'use client';
import { LoginHeader, Otp } from '@/app/components';
import { useState } from 'react';
import { LoginForm } from './form';
import { useRouter } from 'next/navigation';

type LoginPageStatus = 'login' | 'otp';

const Login = () => {
  const router = useRouter();
  const [loginStatus, setLoginStatus] = useState<LoginPageStatus>('login');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const handleOnback = () => {
    if (loginStatus === 'login') {
      router.back();
    } else if (loginStatus === 'otp') {
      setLoginStatus('login');
    }
  };
  const onVerifyOtp = () => {};
  const onResendOtp = () => {};
  const onSubmitForm = (phoneNumber?: string) => {
    if (phoneNumber) {
      setPhoneNumber(phoneNumber);
    }
    setLoginStatus('otp');
  };
  return (
    <>
      <LoginHeader
        onBack={handleOnback}
        title={loginStatus === 'login' ? 'ورود' : 'تایید شماره موبایل'}
      />
      {loginStatus === 'login' ? (
        <LoginForm onSubmitForm={onSubmitForm} />
      ) : (
        <Otp
          mode='login'
          phoneNumber={phoneNumber}
          onVerify={onVerifyOtp}
          onResend={onResendOtp}
        />
      )}
    </>
  );
};

export default Login;
