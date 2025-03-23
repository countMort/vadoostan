'use client';
import classNames from 'classnames';
import classes from './style.module.scss';
import Image from 'next/image';
import moment from 'moment-jalaali';
import { Text } from '@mantine/core';
import { colors } from '@/colors';
import { ExperienceListContext } from '@/app/experience-list/provider';
import { useContext, useRef, WheelEventHandler } from 'react';
moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

const DateFilter = () => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const { selectedDate, onSelectDate } = useContext(ExperienceListContext);
  const today = moment();
  const dates = [...new Array(30)].map((_, index) => {
    return today.clone().add(index, 'day');
  });

  const scrollLeft = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTo({
        left: scrollableDivRef.current.scrollLeft - 150,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTo({
        left: scrollableDivRef.current.scrollLeft + 150,
        behavior: 'smooth',
      });
    }
  };

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className={classes['wrapper']}>
      <div
        onClick={scrollRight}
        className={classNames(classes['arrow'], classes['arrow--right'])}
      >
        <Image src={'/arrow.svg'} width={5} height={8} alt='arrow' />
      </div>
      <div
        onWheel={handleWheel}
        ref={scrollableDivRef}
        className={classes['list']}
      >
        {dates.map((date, index) => {
          const isSelected =
            date.format('YYYY/MM/DD') === selectedDate?.format('YYYY/MM/DD');
          return (
            <div
              onClick={() => {
                onSelectDate(date);
              }}
              key={index}
              className={classNames(
                classes['date-item'],
                isSelected && classes['date-item--selected']
              )}
            >
              <Text
                c={isSelected ? colors['cta-color'] : 'black'}
                size={'12px'}
                fw={800}
              >
                {date.locale('fa').format('dddd')}
              </Text>
              <Text
                c={isSelected ? colors['cta-color'] : 'black'}
                size={'12px'}
                fw={800}
              >
                {date.locale('fa').format('jD')}{' '}
                {date.locale('fa').format('jMMMM')}
              </Text>
            </div>
          );
        })}
      </div>
      <div
        onClick={scrollLeft}
        className={classNames(classes['arrow'], classes['arrow--left'])}
      >
        <Image
          src={'/arrow.svg'}
          width={5}
          height={8}
          alt='arrow'
          className={classes['rotate-arrow']}
        />
      </div>
    </div>
  );
};

export { DateFilter };
