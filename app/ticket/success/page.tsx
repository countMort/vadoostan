'use client';
import { Stack, Text } from '@mantine/core';
import { Button, LoginHeader } from '../../components';
import classes from './style.module.scss';
import { TicketItem } from './ticketItem';
import { useRouter } from 'next/navigation';
import congrats_img from '@/assets/images/congrats.png';
import Image from 'next/image';
import { colors, fontWeight } from '@/constants';

const Ticket = () => {
  const router = useRouter();
  function googleCalendarUrl({
    title,
    details,
    startDate,
    endDate,
    location,
  }: any) {
    const params = new URLSearchParams({
      text: title,
      details,
      location,
      dates: `${startDate}/${endDate}`,
    });
    return `https://www.google.com/calendar/render?action=TEMPLATE&${params.toString()}`;
  }
  const openMapLink = () => {
    const lat = 35.2125;
    const lng = 34.1258;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      '_blank'
    );
  };
  const addToCalendar = () => {
    window.open(
      googleCalendarUrl({
        title: 'My Event',
        details: 'This is my event',
        startDate: '20250709T120000Z',
        endDate: '20250709T130000Z',
        location: 'Tehran',
      }),
      '_blank'
    );
  };
  return (
    <div className={classes['wrapper']}>
      <LoginHeader
        style={{ marginBlockEnd: 50 }}
        onBack={() => {
          router.back();
        }}
        title={'بلیت'}
      />
      <Stack align='center' mb={42}>
        <Image src={congrats_img} alt='congrats' />
        <Text fw={fontWeight.BLACK} size={'18px'}>
          ثبت‌نام شما با موفقیت تکمیل شد!
        </Text>
      </Stack>
      <TicketItem title='تجربه' description={'شبِ خلق: «سفالگری با چرخ»'} />
      <TicketItem
        title='مکان'
        description={
          'شریعتی - بالاتر از مترو صدر - خیابان هدایت - خیابان دشتی - پلاک 16 - کافه خانه دلنشین'
        }
      />
      <TicketItem title='زمان' description='۱۲ بهمن، ساعت ۱۶:۰۰' />
      <TicketItem title='کد پیگیری' description='2222' icon />
      <Stack gap={20} mt={50}>
        <Button bg={colors.blue.bg} c={colors.blue.main}>
          گروه تلگرام
        </Button>
        <Button onClick={openMapLink}>لوکیشن</Button>
        <Button
          bg={colors.purple.bg}
          c={colors.purple.main}
          onClick={addToCalendar}
        >
          اضافه کردن به تقویم
        </Button>
      </Stack>
    </div>
  );
};

export default Ticket;
