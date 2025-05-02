// hooks/useUsers.ts
import { skipToken, useMutation, useQuery } from '@tanstack/react-query';
import { getAxiosInstance } from './apiClient';
import { getCookie } from 'cookies-next';

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

interface UserExperienceListResponse extends Response {
  result: {
    count: number;
    exps: (Experience & { status: 'inactive' | 'published' })[];
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
  result: {
    token: string;
  };
}

interface GetUserExpListProps {
  userId: string | undefined;
  // status: 'inactive' | 'published';
}

export interface ExperienceDetailResponse extends Response {
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

interface GetInvoiceResponseProps extends Response {
  result: {
    expPrice: number;
    tax: number;
    payable: number;
  };
}

interface GetInvoiceRequestProps {
  id: string | null;
}

const getInvoice = async (
  args: GetInvoiceRequestProps
): Promise<GetInvoiceResponseProps> => {
  const { data } = await getAxiosInstance().get(
    `/api/payments/${args.id}/invoice`
  );
  return data;
};

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
  const { data } = await getAxiosInstance().get('/api/user/experiences', {
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
  const { data } = await getAxiosInstance().get(`/api/user/experiences/${id}`);
  return data;
};

const getUserExpList = async ({
  userId,
}: GetUserExpListProps): Promise<UserExperienceListResponse> => {
  const token = getCookie('token') as string;
  const { data } = await getAxiosInstance().get(
    `/api/users/${userId}/experiences`,
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
  return data;
};

export function useGetExperienceDetail({ id }: { id: string }) {
  return useQuery({
    queryKey: ['experience', id],
    queryFn: () => getExperienceDetail({ id }),
  });
}

export function useGetInvoice({ id }: GetInvoiceRequestProps) {
  return useQuery({
    queryKey: ['invoice', id],
    queryFn: id ? () => getInvoice({ id }) : skipToken,
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

export function useGetUserExperienceList({ userId }: GetUserExpListProps) {
  return useQuery({
    queryKey: ['user-experiences', userId],
    queryFn: userId ? () => getUserExpList({ userId }) : skipToken,
  });
}
