'use client';
import { ActionButton, TextInput } from '@/app/components';
import { LoginFormContext, LoginFormProvider } from './formProvider';
import { Input } from '@mantine/core';
import { phoneNumberRule } from '@/app/utils';

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
