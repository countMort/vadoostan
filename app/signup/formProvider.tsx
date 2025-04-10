import { createFormContext } from '@/app/utils';

export const SignupFormContext = createFormContext<{
  name: string;
  family: string;
  phone: string | undefined;
}>({
  name: '',
  family: '',
  phone: undefined,
});

export const SignupFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SignupFormContext.Provider mode='onSubmit'>
      {children}
    </SignupFormContext.Provider>
  );
};
