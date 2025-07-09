// hooks/useUsers.ts
import { skipToken, useMutation, useQuery } from '@tanstack/react-query';
import { axiosInstance } from './apiClient';
import {
  ExperienceDetailResponse,
  ExperiencesListResponce,
  ExperienceStatus,
  GetDataForExperienceCreationProps,
  GetInvoiceRequestProps,
  GetInvoiceResponseProps,
  GetUserExpListProps,
  LoginRequestProps,
  OTPverifyRequestProps,
  OTPverifyResponseProps,
  SignupRequestProps,
  SignupResponseProps,
  UserExperienceListResponse,
} from '@/types/services.type';

const getInvoice = async (
  args: GetInvoiceRequestProps
): Promise<GetInvoiceResponseProps> => {
  const { data } = await axiosInstance.get(`/api/payments/${args.id}/invoice`);
  return data;
};

const verifyOtp = async (
  args: OTPverifyRequestProps
): Promise<OTPverifyResponseProps> => {
  const { data } = await axiosInstance.post('/api/auth/verify-otp', args);
  return data;
};

const fetchUsers = async (
  args: SignupRequestProps
): Promise<SignupResponseProps> => {
  const { data } = await axiosInstance.post('/api/auth/signup', args);
  return data;
};

const login = async (args: LoginRequestProps): Promise<Response> => {
  const { data } = await axiosInstance.post('/api/auth/login', args);
  return data;
};

const getExpList = async ({
  status,
}: {
  status: ExperienceStatus;
}): Promise<ExperiencesListResponce> => {
  const { data } = await axiosInstance.get('/api/user/experiences', {
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
  const { data } = await axiosInstance.get(`/api/user/experiences/${id}`);
  return data;
};

const getUserExpList = async ({
  userId,
}: GetUserExpListProps): Promise<UserExperienceListResponse> => {
  const { data } = await axiosInstance.get(`/api/users/${userId}/experiences`);
  return data;
};

const getDataForExperienceCreation =
  async (): Promise<GetDataForExperienceCreationProps> => {
    const { data } = await axiosInstance.get(
      '/api/admin/experiences/creation/data'
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

export function useGetDataForExperienceCreation() {
  return useQuery({
    queryKey: ['/api/admin/experiences/creation/data'],
    queryFn: () => getDataForExperienceCreation(),
  });
}
