'use client';
import {
  FooterActionBarTemplate,
  ImageUploader,
  LoginHeader,
  TextInput,
} from '@/app/components';
import { useRouter } from 'next/navigation';
import classes from './style.module.scss';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { NumberInput, Select, Space, Text, Textarea } from '@mantine/core';
import classNames from 'classnames';
import { TimeInput } from '@mantine/dates';

const NewExperience = () => {
  const router = useRouter();
  const handleOnback = () => {
    router.back();
  };
  return (
    <div className={classes['wrapper']}>
      <div style={{ paddingInline: 20 }}>
        <LoginHeader
          style={{ marginBlockStart: 70, marginBlockEnd: 30 }}
          onBack={handleOnback}
          title={'خلق تجربه جدید'}
        />
      </div>

      <div className={classes['form']}>
        <TextInput label='نام تجربه' />
        <Space h='md' />
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 3 }}>
          <Text size='sm'>تاریخ تجربه</Text>
          <DatePicker
            inputClass={classNames(classes['date-input'])}
            calendar={persian}
            locale={persian_fa}
            calendarPosition='bottom-right'
          />
        </div>
        <Space h='md' />
        <TimeInput label='ساعت تجربه' />
        <Space h='md' />
        <NumberInput label='مدت زمان' allowNegative={false} />
        <Space h='md' />
        <NumberInput label='قیمت' thousandSeparator=',' allowNegative={false} />
        <Space h='md' />
        <TextInput label='محله' />
        <Space h='md' />
        <TextInput label='آدرس' />
        <Space h='md' />
        <TextInput label='لینک لوکیشن' />
        <Space h='md' />
        <Textarea
          label='توضیحات تجربه'
          autosize
          minRows={2}
          maxRows={4}
          resize='vertical'
        />
        <Space h='md' />
        <Select
          label='قبیله'
          data={['موسیقی', 'آشپزی', 'بازی', 'هنر']}
          searchable
          clearable
          nothingFoundMessage='قبیله یافت نشد...'
        />
        <Space h='md' />
        <ImageUploader />
      </div>
      <FooterActionBarTemplate>test</FooterActionBarTemplate>
    </div>
  );
};

export default NewExperience;
