import { colors } from '@/colors';
import classes from './style.module.scss';
import { Text } from '@mantine/core';
import { redirect, RedirectType } from 'next/navigation';

interface ExperienceItemProps {
  category: string;
  title: string;
  location: string;
  time: string;
  price: string;
}

const ExperienceItem = ({
  category,
  location,
  price,
  time,
  title,
}: ExperienceItemProps) => {
  return (
    <div
      onClick={() => {
        redirect('/experience', RedirectType.push);
      }}
      className={classes['wrapper']}
    >
      <div className={classes['category']}>
        <Text size='14px' fw={800}>
          {category}
        </Text>
      </div>
      <div className={classes['detail']}>
        <Text size={'14px'} fw={900}>
          {title}
        </Text>
        <div className={classes['location-wrapper']}>
          <Text size={'12px'} fw={400}>
            {`محله: ${location}`}
          </Text>
          <div className={classes['dot']} />
          <Text size={'12px'} fw={400}>
            {`ساعت: ${time}`}
          </Text>
          <div className={classes['price']}>
            <Text size='12px' c={colors['cta-color']} fw={700}>
              {price}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExperienceItem };
