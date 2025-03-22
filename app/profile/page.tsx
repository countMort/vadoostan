import LoginSigninInFooter from '../components/molecules/loginSigninInFooter';
import { Text } from '@mantine/core';
import classes from './style.module.scss';
import Image from 'next/image';

const ProfilePage = () => {
  return (
    <>
      <div className={classes['wrapper']}>
        <div className={classes['user-wrapper']}>
          <div className={classes['user-image']}>
            <Image src={'/profile.svg'} width={27} height={27} alt='profile' />
          </div>
          <div className={classes['user-information']}>
            <Text style={{ marginBlockEnd: 10 }} size='24px' fw={800}>
              علی محمودی
            </Text>
            <Text size='18px' fw={500} c={'#A1A1A1'}>
              09123456789
            </Text>
          </div>
        </div>
        <div className={classes['action-wrapper']}>
          <div className={classes['action-item']}>
            <Image
              src={'/past-experience.svg'}
              width={50}
              height={50}
              alt='past-experience'
            />
            <Text fw={500} size='14px'>
              {'تجربیات گذشته'}
            </Text>
          </div>
          <div className={classes['action-item']}>
            <Image
              src={'/support.svg'}
              width={50}
              height={50}
              alt='past-experience'
            />
            <Text fw={500} size='14px'>
              {'پشتیبانی'}
            </Text>
          </div>
        </div>
      </div>
      <LoginSigninInFooter />
    </>
  );
};

export default ProfilePage;
