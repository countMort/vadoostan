import { createFormContext } from '@/app/utils';

interface NewExperienceFormContextProps {
  name: string;
  description: string;
  category: string;
  duration: string;
  date: string;
  timeOfStart: string;
  price: string;
  capacity: string;
  telegramLink: string;
  inclutions: string[];
  faq: string[];
  address: string;
  locationLink: string;
}

export const NewExperienceFormContext =
  createFormContext<NewExperienceFormContextProps>({
    address: '',
    capacity: '',
    category: '',
    date: '',
    description: '',
    duration: '',
    faq: [],
    inclutions: [],
    locationLink: '',
    name: '',
    price: '',
    telegramLink: '',
    timeOfStart: '',
  });
