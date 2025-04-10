'use client';
import { ActionButton } from '@/app/components';
import { LoginFormContext, LoginFormProvider } from './formProvider';
import { Input } from '@mantine/core';
import { phoneNumberRule } from '@/app/utils';
import { PersianSupportNumberInput } from '../components/atoms/persianSupportInput';

interface SignUpFormProps {
  onSubmitForm: (phone?: string) => void;
  isPending: boolean;
}

const LoginForm = ({ onSubmitForm, isPending }: SignUpFormProps) => {
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
      <Controller
        name='phone'
        rules={phoneNumberRule}
        render={({ field }) => (
          <Input.Wrapper error={errors.phone?.message}>
            <PersianSupportNumberInput
              {...field}
              onChangeHandler={field.onChange}
              style={{ width: '100%' }}
              styles={{
                input: {
                  backgroundColor: '#f2f2f2',
                },
              }}
              radius={20}
              size='lg'
              placeholder='شماره تماس'
            />
          </Input.Wrapper>
        )}
      />
      <ActionButton
        loading={isPending}
        onClick={handleSubmit(onSubmit)}
        style={{ marginBlockStart: 16 }}
      >
        ادامه
      </ActionButton>
    </>
  );
};

const FormProvider = ({ onSubmitForm, isPending }: SignUpFormProps) => {
  return (
    <LoginFormProvider>
      <LoginForm onSubmitForm={onSubmitForm} isPending={isPending} />
    </LoginFormProvider>
  );
};

export { FormProvider as LoginForm };
