import { ActionButton } from '@/app/components';
import classes from './style.module.scss';
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={classes['landing']}>
      <div className={classes['image']}>
        <div className={classes['actions']}>
          <div className={classes['title-wrapper']}>
            <div className={classes['title']}>وَ دوستان</div>
            <div className={classes['title']}>
              جایی برای تجربه‌های حال‌‌خوب‌کن
            </div>
          </div>
          <div className={classes['buttons']}>
            <ActionButton style={{ width: 160, height: 60 }}>
              <Link href='/signup'>ثبت نام</Link>
            </ActionButton>
            <Button
              style={{
                width: 160,
                height: 60,
                backgroundColor: '#F5F7F6',
                borderRadius: 20,
                color: 'black',
                fontSize: 18,
              }}
            >
              <Link href={'/login'}>ورود</Link>
            </Button>
          </div>
          <div className={classes['list-text']}>لیست تجربه‌ها</div>
        </div>
      </div>
    </div>
  );
}
