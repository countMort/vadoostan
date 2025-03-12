import { createFormContext } from '@/app/utils';

export const LoginFormContext = createFormContext<{
  name: string;
  family: string;
  phone: number | undefined;
}>({
  name: '',
  family: '',
  phone: undefined,
});

export const LoginFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <LoginFormContext.Provider mode='onSubmit'>
      {children}
    </LoginFormContext.Provider>
  );
};
