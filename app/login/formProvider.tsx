import { createFormContext } from '@/app/utils';

export const LoginFormContext = createFormContext<{
  phone: number | undefined;
}>({
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
