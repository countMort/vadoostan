'use client';
import { LoginHeader, Otp } from '@/app/components';
import { useState } from 'react';
import { LoginForm } from './form';
type LoginPageStatus = 'login' | 'otp';

const Login = () => {
  const [loginStatus, setLoginStatus] = useState<LoginPageStatus>('login');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const handleOnback = () => {};
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
          phoneNumber={phoneNumber}
          onVerify={onVerifyOtp}
          onResend={onResendOtp}
        />
      )}
    </>
  );
};

export default Login;
