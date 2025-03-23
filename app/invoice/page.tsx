'use client';
import { LoginHeader } from '../components';
import classes from './style.module.scss';
import { useRouter } from 'next/navigation';
import { Button, Text } from '@mantine/core';
const Invoice = () => {
  const { back } = useRouter();
  return (
    <div className={classes['wrapper']}>
      <LoginHeader
        style={{ marginBlockEnd: 48 }}
        onBack={() => {
          back();
        }}
        title={'فاکتور'}
      />
      <Text fw={700} size='16px'>
        {'جزئیات قیمت'}
      </Text>
      <div className={classes['detail']}>
        <div className={classes['price-wrapper']}>
          <Text size='14px' fw={600}>
            {'هزینه تجربه'}
          </Text>
          <Text size='14px' fw={600}>
            {'300 هزار‌تومان'}
          </Text>
        </div>
        <div className={classes['price-wrapper']}>
          <Text size='14px' fw={600}>
            {'مالیات'}
          </Text>
          <Text size='14px' fw={600}>
            {'30 هزار‌تومان'}
          </Text>
        </div>
      </div>
      <div className={classes['final-price']}>
        <div className={classes['price-wrapper']}>
          <Text size='14px' fw={600}>
            {'قابل پرداخت'}
          </Text>
          <Text size='14px' fw={600}>
            {'300 هزار‌تومان'}
          </Text>
        </div>
      </div>
      <div className={classes['pay-invoice']}>
        <Button fullWidth c={'#ffffff'} bg={'#15A983'} radius={20} h={60}>
          {'پرداخت'}
        </Button>
      </div>
    </div>
  );
};

export default Invoice;
