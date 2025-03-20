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
      <div className={classes['category']}>{category}</div>
      <div className={classes['detail']}>
        <div className={classes['name']}>{title}</div>
        <div
          style={{
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Text size={'12px'} fw={400}>
            {`محله: ${location}`}
          </Text>
          <div className={classes['dot']} />
          <Text size={'12px'} fw={400}>
            {`ساعت: ${time}`}
          </Text>
          <div className={classes['price']}>{price}</div>
        </div>
      </div>
    </div>
  );
};

export { ExperienceItem };
