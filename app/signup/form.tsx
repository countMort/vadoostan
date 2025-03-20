'use client';
import { ActionButton, TextInput } from '@/app/components';
import classes from './style.module.scss';
import { SignupFormContext, SignupFormProvider } from './formProvider';
import { Input } from '@mantine/core';
import { familyRules, nameRules, phoneNumberRule } from '@/app/utils';

interface SignUpFormProps {
  onSubmitForm: (phone?: string) => void;
}

const SignUpForm = ({ onSubmitForm }: SignUpFormProps) => {
  const { Controller } = SignupFormContext;
  const { handleSubmit } = SignupFormContext.useFormContext();
  const { errors } = SignupFormContext.useFormState();
  const { watch } = SignupFormContext.useFormContext();
  const phoneNumber = watch('phone');

  const onSubmit = () => {
    onSubmitForm(phoneNumber?.toString());
  };

  return (
    <>
      <div className={classes['name-wrapper']}>
        <Controller
          name='name'
          rules={nameRules}
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
          rules={familyRules}
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
        rules={phoneNumberRule}
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
    <SignupFormProvider>
      <SignUpForm onSubmitForm={onSubmitForm} />
    </SignupFormProvider>
  );
};

export { FormProvider as SignUpForm };
