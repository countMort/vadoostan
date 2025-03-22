'use server';
import { ActionButton, FooterActionBarTemplate } from '../../atoms';
import { Text } from '@mantine/core';
import classes from './style.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { cookies } from 'next/headers';
import { FooterIcon } from './footerIcon';

export default async function LoginSigninInFooter() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  const unAuthenticated = (
    <div className={classes['wrapper']}>
      <ActionButton style={{ width: 160, height: 60 }}>
        <Link href={'/signup'}>ثبت نام</Link>
      </ActionButton>
      <Text className={classes['login']} size='18px' fw={700}>
        <Link href={'/login'}>ورود</Link>
      </Text>
    </div>
  );

  const authenticated = (
    <div
      className={classNames(
        classes['wrapper'],
        classes['wrapper--authenticate']
      )}
    >
      <Link href={'/profile'}>
        <FooterIcon path='/profile' text='پروفایل' />
      </Link>
      <Link href={'/experience-list'}>
        <FooterIcon path='/experience-list' text='تجربه‌ها' />
      </Link>
    </div>
  );

  return (
    <FooterActionBarTemplate>
      {token ? authenticated : unAuthenticated}
    </FooterActionBarTemplate>
  );
}
