export type ExperienceItemStatus =
  | 'soldout'
  | 'active-historial'
  | 'recent-historical'
  | 'active';
export interface ExperienceItemProps {
  category: string;
  title: string;
  location: string;
  time: string;
  price: string;
  status: ExperienceItemStatus;
}
