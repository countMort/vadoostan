'use client';
import { ActionButton, TextInput } from '@/app/components';
import { LoginFormContext, LoginFormProvider } from './formProvider';
import { Input } from '@mantine/core';
import { phoneNumberRule } from '@/app/utils';

interface SignUpFormProps {
  onSubmitForm: (phone?: string) => void;
}

const LoginForm = ({ onSubmitForm }: SignUpFormProps) => {
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
              type='number'
              size='lg'
              placeholder='شماره تماس'
            />
          </Input.Wrapper>
        )}
      />
      <ActionButton
        onClick={handleSubmit(onSubmit)}
        style={{ marginBlockStart: 16 }}
      >
        ادامه
      </ActionButton>
    </>
  );
};

const FormProvider = ({ onSubmitForm }: SignUpFormProps) => {
  return (
    <LoginFormProvider>
      <LoginForm onSubmitForm={onSubmitForm} />
    </LoginFormProvider>
  );
};

export { FormProvider as LoginForm };
