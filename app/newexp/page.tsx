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
import gregorian_en from 'react-date-object/locales/gregorian_en';
import gregorian from 'react-date-object/calendars/gregorian';
import {
  MultiSelect,
  NumberInput,
  Select,
  Space,
  Text,
  Textarea,
} from '@mantine/core';
import classNames from 'classnames';
import { TimeInput } from '@mantine/dates';
import { useGetDataForExperienceCreation } from '@/services/services';
import { NewExperienceFormContext } from './formContext';

const NewExperience = () => {
  const router = useRouter();
  const { Controller } = NewExperienceFormContext;

  const handleOnback = () => {
    router.back();
  };

  const { data } = useGetDataForExperienceCreation();

  const { result } = data || {};
  const { categories } = result || {};

  const _categories = categories?.map(({ id, title }) => {
    return {
      label: title,
      value: String(id),
    };
  });

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
        <Controller
          name='name'
          render={({ field }) => <TextInput {...field} label='نام تجربه' />}
        />
        <Space h='md' />
        <Controller
          name='description'
          render={({ field }) => (
            <Textarea {...field} label='توضیحات تجربه' rows={6} />
          )}
        />
        <Space h='md' />
        <Controller
          name='category'
          render={({ field }) => (
            <Select
              {...field}
              label='قبیله'
              data={_categories}
              searchable
              clearable
              nothingFoundMessage='قبیله یافت نشد...'
            />
          )}
        />
        <Space h='md' />
        <Controller
          name='duration'
          render={({ field }) => (
            <NumberInput {...field} label='مدت زمان' allowNegative={false} />
          )}
        />
        <Space h='md' />
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 3 }}>
          <Text size='sm'>تاریخ تجربه</Text>
          <DatePicker
            onChange={(e) => {
              const sag = e?.convert(gregorian, gregorian_en).format();

              console.log({ sag });
            }}
            inputClass={classNames(classes['date-input'])}
            calendar={persian}
            locale={persian_fa}
            calendarPosition='bottom-right'
          />
        </div>
        <Space h='md' />
        <TimeInput label='ساعت شروع' />
        <Space h='md' />
        <NumberInput label='قیمت' thousandSeparator=',' allowNegative={false} />
        <Space h='md' />
        <NumberInput label='ظرفیت' allowNegative={false} />
        <Space h='md' />
        <TextInput label='لینک گروه تلگرامی' />
        <Space h='md' />
        <MultiSelect
          label='آنچه در این تجربه ارائه می‌شود'
          data={['موسیقی', 'آشپزی', 'بازی', 'هنر']}
          searchable
          clearable
          nothingFoundMessage='موردی یافت نشد...'
        />
        <Space h='md' />
        <MultiSelect
          label='سوالات متداول'
          data={['موسیقی', 'آشپزی', 'بازی', 'هنر']}
          searchable
          clearable
          nothingFoundMessage='موردی یافت نشد...'
        />
        <Space h='md' />
        <TextInput label='محله' />
        <Space h='md' />
        <TextInput label='آدرس' />
        <Space h='md' />
        <TextInput label='لینک لوکیشن' />
        <Space h='md' />
        <ImageUploader />
      </div>
      <FooterActionBarTemplate>test</FooterActionBarTemplate>
    </div>
  );
};

const NewExperienceFormContextProvider = () => {
  return (
    <NewExperienceFormContext.Provider>
      <NewExperience />
    </NewExperienceFormContext.Provider>
  );
};

export default NewExperienceFormContextProvider;
