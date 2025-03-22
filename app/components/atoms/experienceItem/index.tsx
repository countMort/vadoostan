import { colors } from '@/colors';
import classes from './style.module.scss';
import { Text } from '@mantine/core';
import { redirect, RedirectType } from 'next/navigation';
import { ExperienceItemProps } from '@/app/experience-list/provider';
import classNames from 'classnames';

const ExperienceItem = ({
  category,
  location,
  price,
  time,
  title,
  isSoldOut,
}: ExperienceItemProps) => {
  const textColor = isSoldOut ? '#B4B4B4' : '#000000';

  const priceTag = (
    <div className={classNames(classes['price--tag'], classes['tag'])}>
      <Text size='12px' c={colors['cta-color']} fw={700}>
        {price}
      </Text>
    </div>
  );

  const soldoutTag = (
    <div className={classNames(classes['soldout-tag'], classes['tag'])}>
      <Text size='12px' c={'#ffffff'} fw={700}>
        {'تکمیل ظرفیت'}
      </Text>
    </div>
  );

  return (
    <div
      onClick={() => {
        redirect('/experience', RedirectType.push);
      }}
      className={classes['wrapper']}
    >
      <div
        className={classNames(
          classes['category'],
          isSoldOut && classes['category--soldout']
        )}
      >
        <Text c={isSoldOut ? '#ffffff' : '#000000'} size='14px' fw={800}>
          {category}
        </Text>
      </div>
      <div className={classes['detail']}>
        <Text c={textColor} size={'14px'} fw={900}>
          {title}
        </Text>
        <div className={classes['location-wrapper']}>
          <Text c={textColor} size={'12px'} fw={400}>
            {`محله: ${location}`}
          </Text>
          <div
            className={classNames(
              classes['dot'],
              isSoldOut && classes['dot--soldout']
            )}
          />
          <Text c={textColor} size={'12px'} fw={400}>
            {`ساعت: ${time}`}
          </Text>
          <div className={classes['price-wrapper']}>
            {isSoldOut ? soldoutTag : priceTag}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ExperienceItem };
