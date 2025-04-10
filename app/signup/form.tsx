'use client';
import { ActionButton, successToast, TextInput } from '@/app/components';
import classes from './style.module.scss';
import { SignupFormContext, SignupFormProvider } from './formProvider';
import { Input } from '@mantine/core';
import { familyRules, nameRules, phoneNumberRule } from '@/app/utils';
import { useSignup } from '@/services/services';
import { errorToast } from '@/app/components';

interface SignUpFormProps {
  onSubmitForm: (phone?: string) => void;
}

const SignUpForm = ({ onSubmitForm }: SignUpFormProps) => {
  const { Controller } = SignupFormContext;
  const { handleSubmit } = SignupFormContext.useFormContext();
  const { errors } = SignupFormContext.useFormState();
  const { watch, getValues } = SignupFormContext.useFormContext();
  const phoneNumber = watch('phone');
  const { mutate: onSignup, isPending } = useSignup();

  const onSubmit = () => {
    const { family, name, phone } = getValues();
    onSignup(
      {
        client: 'web',
        firstName: name,
        lastName: family,
        mobileNumber: phone as string,
      },
      {
        onSuccess() {
          successToast({ message: 'کد ارسال شد!' });
          onSubmitForm(phoneNumber?.toString());
        },
        onError(error) {
          errorToast({ message: error.message });
        },
      }
    );
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
                styles={{
                  input: {
                    width: 140,
                  },
                  wrapper: {
                    width: 140,
                  },
                }}
                className={classes['input']}
                width={150}
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
                radius={20}
                size='lg'
                placeholder='نام‌خانوادگی'
                styles={{
                  input: {
                    width: 140,
                  },
                  wrapper: {
                    width: 140,
                  },
                }}
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
              type='tel'
              size='lg'
              placeholder='شماره تماس'
            />
          </Input.Wrapper>
        )}
      />
      <ActionButton
        loading={isPending}
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
