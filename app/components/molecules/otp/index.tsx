'use client';
import { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import { ActionButton } from '@/app/components';
import classes from './style.module.scss';

interface OtpProps {
  onVerify?: () => void;
  onResend?: () => void;
  phoneNumber?: string;
  mode: 'login' | 'signup';
}

const Otp = ({ onVerify, onResend, phoneNumber, mode }: OtpProps) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const [isCodeInValid] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(120);
      setCanResend(false);
      onResend?.();
    }
  };

  const handleVerify = () => {
    if (otp.length === 4) {
      onVerify?.();
    }
  };

  return (
    <div className={classes['otp-container']}>
      <div className={classes['otp-description']}>
        کد ارسال شده را وارد کنید
      </div>
      <div className={classes['otp-phone-number']}>{phoneNumber}</div>
      <div className={classes['otp-input-container']}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => (
            <input {...props} type='number' className={classes['otp-input']} />
          )}
          containerStyle={classes['otp-input-wrapper']}
          shouldAutoFocus
        />
      </div>

      <div className={classes['resend-container']}>
        {canResend ? (
          <div onClick={handleResend} className={classes['can-resend']}>
            دریافت مجدد کد
          </div>
        ) : isCodeInValid ? (
          <div className={classes['invalid-text']}>کد نامعتیر</div>
        ) : (
          <>
            <span className={classes['resend-text']}>دریافت مجدد کد:</span>
            <span className={classes['timer']}>{formatTime(timer)}</span>
          </>
        )}
      </div>

      <ActionButton onClick={handleVerify} disabled={otp.length !== 4}>
        {mode === 'login' ? 'تایید و ورود' : 'تایید و ثبت نام'}
      </ActionButton>
    </div>
  );
};

export { Otp };
