'use client';
import { SignUpForm } from './form';
import { Otp } from '@/app/components';
import { useState } from 'react';
import { LoginHeader } from '@/app/components';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

type SignupStatus = 'signup' | 'otp';

const Signup = () => {
  const [signUpStatus, setSignUpStatus] = useState<SignupStatus>('signup');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const router = useRouter();

  const onSubmitForm = (phone?: string) => {
    if (phone) {
      setPhoneNumber(phone);
    }
    setSignUpStatus('otp');
  };

  const onVerifyOtp = async () => {
    // const cookie = getCookie('token');
    setCookie('token', 'test-for-cookie-1');

    router.push('/experience');
  };

  const onResendOtp = () => {
    // Handle OTP resend logic here
    console.log('OTP resent');
  };

  const onBackToSignup = () => {
    if (signUpStatus === 'otp') {
      setSignUpStatus('signup');
    } else if (signUpStatus === 'signup') {
      router.back();
    }
  };

  return (
    <>
      <LoginHeader
        onBack={onBackToSignup}
        title={signUpStatus === 'signup' ? 'ثبت نام' : 'تایید شماره موبایل'}
      />
      {signUpStatus === 'signup' ? (
        <SignUpForm onSubmitForm={onSubmitForm} />
      ) : (
        <Otp
          mode='signup'
          phoneNumber={phoneNumber}
          onVerify={onVerifyOtp}
          onResend={onResendOtp}
        />
      )}
    </>
  );
};

export default Signup;
