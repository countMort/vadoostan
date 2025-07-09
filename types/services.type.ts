export type ClientType = 'web' | 'telegram';

export type ExperienceStatus = 'PUBLISHED';

export interface Experience {
  id: string;
  title: string;
  category: string;
  price: number;
  date: string;
  address: string;
  isFilled: boolean;
}

export interface ExperiencesListResponce extends Response {
  result: {
    count: number;
    exps: Experience[];
  };
}

export interface UserExperienceListResponse extends Response {
  result: {
    count: number;
    exps: (Experience & { status: 'inactive' | 'published' })[];
  };
}

export interface Response {
  isSuccessful: boolean;
  message: string;
  traceId: string;
  errorCode: number;
}

export interface LoginRequestProps {
  mobileNumber: string;
  client: ClientType;
}

export interface SignupRequestProps {
  mobileNumber: string;
  firstName: string;
  lastName: string;
  client: ClientType;
}
export type SignupResponseProps = Response;

export interface OTPverifyRequestProps {
  mobileNumber: string;
  otp: string;
  client: ClientType;
}

export interface OTPverifyResponseProps extends Response {
  errorCode: number;
  result: {
    token: string;
  };
}

export interface GetUserExpListProps {
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

export interface GetInvoiceResponseProps extends Response {
  result: {
    expPrice: number;
    tax: number;
    payable: number;
  };
}

export interface GetInvoiceRequestProps {
  id: string | null;
}

export interface GetDataForExperienceCreationProps extends Response {
  result: {
    templates: {
      exp: {
        id: string;
        categoryId: number;
        cityId: number;
        title: string;
        description: string;
        label: null;
        isSeries: boolean;
        creatorUserId: string;
      };
      faqs: {
        question: string;
        answer: string;
      }[];
      medias: {
        url: string;
        type: string;
      }[];
    }[];
    inclusions: {
      id: number;
      title: string;
    }[];
    venues: {
      id: number;
      title: string;
    }[];
    directors: {
      userId: string;
      name: string;
      bio: string;
      photoUrl: string;
    }[];
    assistants: string[];
    categories: {
      id: number;
      title: string;
    }[];
  };
}

export type SwaggerResponse<R> = R;

export interface ApiError {
  isSuccessful: boolean;
  message: string;
  traceId: string;
  errorCode: number;
}

export interface ApiResponse {
  isSuccessful: boolean;
  message: string;
  traceId: string;
  result: unknown[];
}
