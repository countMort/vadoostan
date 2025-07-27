'use client';

import { Stack, Text } from '@mantine/core';
import Image from 'next/image';
import fail_img from '@/assets/images/fail.png';
import { Button, LoginHeader, successToast } from '@/app/components';
import { useRouter } from 'next/navigation';
import { colors, fontWeight } from '@/constants';
import { CopyIcon } from '@/app/components/icons/CopyIcon';

export default function FailedPayment() {
  const router = useRouter();
  const copyCode = async () => {
    await navigator.clipboard.writeText('');
    successToast({ message: 'کپی شد.' });
  };

  return (
    <Stack px={42} pt={50} h={'100vh'}>
      <LoginHeader
        style={{ marginBlockEnd: 50 }}
        onBack={() => {
          router.back();
        }}
        title={'بلیت'}
      />
      <Stack my='auto'>
        <Stack align='center' px={42} ta='center'>
          <Image src={fail_img} alt='congrats' />
          <Text fw={fontWeight.BLACK} size={'18px'} mt={22} mb={8}>
            متأسفیم، ثبت‌نام انجام نشد!
          </Text>
          <Text fw={fontWeight.SEMI_BOLD} size='12px'>
            در صورت کسر وجه، مبلغ طی ۷۲ ساعت کاری به حسابتان بازگردانده می‌شود.
          </Text>
          <Text fw={fontWeight.SEMI_BOLD} size='12px' onClick={copyCode}>
            کد پیگیری: ۱۲۳۴۵۶۸۹۰
            <CopyIcon className='inline mr-1' />
          </Text>
        </Stack>
        <Stack gap={20}>
          <Button>لیست تجربه‌ها</Button>
          <Button bg={colors.green.bg} c={colors.green.main}>
            پشتیبانی
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
