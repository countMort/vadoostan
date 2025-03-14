'use client';
import { SignUpForm } from './form';
import { Otp } from '@/app/components';
import { useState } from 'react';
import { LoginHeader } from '../components/loginHeader';
import { useRouter } from 'next/navigation';

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

  const onVerifyOtp = () => {
    router.push('/experience');
  };

  const onResendOtp = () => {
    // Handle OTP resend logic here
    console.log('OTP resent');
  };

  const onBackToSignup = () => {
    if (signUpStatus === 'otp') {
      setSignUpStatus('signup');
    } else {
      setSignUpStatus('signup');
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
          phoneNumber={phoneNumber}
          onVerify={onVerifyOtp}
          onResend={onResendOtp}
        />
      )}
    </>
  );
};

export default Signup;
