'use client';
import { ActionButton, TextInput } from '@/app/components';
import classes from './style.module.scss';
import { LoginFormContext, LoginFormProvider } from './formProvider';
import { Input } from '@mantine/core';

interface SignUpFormProps {
  onSubmitForm: (phone?: string) => void;
}

const SignUpForm = ({ onSubmitForm }: SignUpFormProps) => {
  const persianRegex = /^[\u0600-\u06FF\s]+$/;
  const phoneNumberRegex = /^09\d{9}$/;
  const requireFieldMessage = 'این فیلد الزامی است';

  const { Controller } = LoginFormContext;
  const { handleSubmit } = LoginFormContext.useFormContext();
  const { errors } = LoginFormContext.useFormState();
  const { watch } = LoginFormContext.useFormContext();
  const phoneNumber = watch('phone');

  const onSubmit = () => {
    onSubmitForm(phoneNumber?.toString());
  };

  return (
    <>
      <div className={classes['name-wrapper']}>
        <Controller
          name='name'
          rules={{
            required: requireFieldMessage,
            pattern: {
              value: persianRegex,
              message: 'نام باید فارسی باشد!',
            },
          }}
          render={({ field }) => (
            <Input.Wrapper error={errors.name?.message}>
              <TextInput
                {...field}
                className={classes['input']}
                width={160}
                radius={20}
                size='lg'
                placeholder='نام'
              />
            </Input.Wrapper>
          )}
        />
        <Controller
          name='family'
          rules={{
            required: requireFieldMessage,
            pattern: {
              value: persianRegex,
              message: 'نام خانوادگی باید فارسی باشد!',
            },
          }}
          render={({ field }) => (
            <Input.Wrapper error={errors.family?.message}>
              <TextInput
                {...field}
                className={classes['input']}
                width={160}
                radius={20}
                size='lg'
                placeholder='نام‌خانوادگی'
              />
            </Input.Wrapper>
          )}
        />
      </div>
      <Controller
        name='phone'
        rules={{
          required: requireFieldMessage,
          pattern: {
            value: phoneNumberRegex,
            message: 'شماره تماس باید با 09 شروع شود!',
          },
        }}
        render={({ field }) => (
          <Input.Wrapper error={errors.phone?.message}>
            <TextInput
              {...field}
              width={'100%'}
              radius={20}
              type='number'
              size='lg'
              placeholder='شماره تماس'
            />
          </Input.Wrapper>
        )}
      />
      <ActionButton
        onClick={handleSubmit(onSubmit)}
        className={classes['button']}
      >
        ادامه
      </ActionButton>
    </>
  );
};

const FormProvider = ({ onSubmitForm }: SignUpFormProps) => {
  return (
    <LoginFormProvider>
      <SignUpForm onSubmitForm={onSubmitForm} />
    </LoginFormProvider>
  );
};

export { FormProvider as SignUpForm };
