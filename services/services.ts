// hooks/useUsers.ts
import { useMutation } from '@tanstack/react-query';
import { getAxiosInstance } from './apiClient';

type ClientType = 'web' | 'telegram';

interface Response {
  isSuccessful: boolean;
  message: string;
  traceId: string;
  errorCode: number;
}

interface LoginRequestProps {
  mobileNumber: string;
  client: ClientType;
}

interface SignupRequestProps {
  mobileNumber: string;
  firstName: string;
  lastName: string;
  client: ClientType;
}
type SignupResponseProps = Response;

interface OTPverifyRequestProps {
  mobileNumber: string;
  otp: string;
  client: ClientType;
}

interface OTPverifyResponseProps extends Response {
  errorCode: number;
}

const verifyOtp = async (
  args: OTPverifyRequestProps
): Promise<OTPverifyResponseProps> => {
  const { data } = await getAxiosInstance().post('/auth/verify-otp', args);
  return data;
};

const fetchUsers = async (
  args: SignupRequestProps
): Promise<SignupResponseProps> => {
  const { data } = await getAxiosInstance().post('/auth/signup', args);
  return data;
};

const login = async (args: LoginRequestProps): Promise<Response> => {
  const { data } = await getAxiosInstance().post('/auth/login', args);
  console.log({ data });
  return data;
};

export function useSignup() {
  return useMutation({
    mutationFn: fetchUsers,
  });
}

export function useVerifyOtp() {
  return useMutation({
    mutationFn: verifyOtp,
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}
