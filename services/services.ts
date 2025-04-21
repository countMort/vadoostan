// hooks/useUsers.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { getAxiosInstance } from './apiClient';

type ClientType = 'web' | 'telegram';

type ExperienceStatus = 'PUBLISHED';

export interface Experience {
  id: string;
  title: string;
  category: string;
  price: number;
  date: string;
  address: string;
  isFilled: boolean;
}

interface ExperiencesListResponce extends Response {
  result: {
    count: number;
    exps: Experience[];
  };
}

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

interface ExperienceDetailResponse extends Response {
  result: {
    title: string;
    description: {
      main: string;
    };
    date: string;
    address: string;
    price: number;
    directors: [
      {
        name: string;
        bio: string;
        photoUrl: string;
      },
    ];
    expPhotos: string[];
    faqs: [
      {
        question: string;
        answer: string;
      },
    ];
    inclusions: string[];
  };
}

const verifyOtp = async (
  args: OTPverifyRequestProps
): Promise<OTPverifyResponseProps> => {
  const { data } = await getAxiosInstance().post('/api/auth/verify-otp', args);
  return data;
};

const fetchUsers = async (
  args: SignupRequestProps
): Promise<SignupResponseProps> => {
  const { data } = await getAxiosInstance().post('/api/auth/signup', args);
  return data;
};

const login = async (args: LoginRequestProps): Promise<Response> => {
  const { data } = await getAxiosInstance().post('/api/auth/login', args);
  return data;
};

const getExpList = async ({
  status,
}: {
  status: ExperienceStatus;
}): Promise<ExperiencesListResponce> => {
  const { data } = await getAxiosInstance().get('/api/experiences', {
    params: {
      status,
    },
  });
  return data;
};

const getExperienceDetail = async ({
  id,
}: {
  id: string;
}): Promise<ExperienceDetailResponse> => {
  const { data } = await getAxiosInstance().get(`/api/experiences/${id}`);
  return data;
};

export function useGetExperienceDetail({ id }: { id: string }) {
  return useQuery({
    queryKey: ['experience', id],
    queryFn: () => getExperienceDetail({ id }),
  });
}

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

export function useGetExperienceList({ status }: { status: ExperienceStatus }) {
  return useQuery({
    queryKey: ['experiences', status],
    queryFn: () => getExpList({ status }),
  });
}
