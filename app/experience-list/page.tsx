'use client';
import {
  DateFilter,
  ExperienceItem,
  LoginSigninInFooter,
} from '@/app/components';
import classes from './style.module.scss';
import moment, { Moment } from 'moment-jalaali';
import { Button, Text } from '@mantine/core';
import { ExperienceListContext, ExperienceListProvider } from './provider';
import { useContext, useEffect, useRef, useState } from 'react';
moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

const ExperienceList = () => {
  const { experienceList, onRemoveFilter } = useContext(ExperienceListContext);
  const [interSectedDateIndex, setInterSectedDateIndex] = useState<
    string | null
  >('0');
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rootObserverElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const item = entry.target.getAttribute('data-itemindex'); // Get the item's text
          if (entry.isIntersecting && item) {
            setInterSectedDateIndex(item);
          }
        });
      },
      {
        root: rootObserverElement.current,
        rootMargin: '0px 0px -100% 0px',
        threshold: 0,
      }
    );

    // Observe each item
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup: Stop observing when the component unmounts
    return () => {
      if (itemRefs.current) {
        itemRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  const titleDate = interSectedDateIndex
    ? experienceList[Number(interSectedDateIndex)]
    : null;

  const generateTitleDate = (day: Moment) => {
    return (
      <Text fw={900} size={'18px'}>
        {`${day.locale('fa').format('jD')}\n ${day.locale('fa').format('jMMMM')}`}
      </Text>
    );
  };

  return (
    <>
      <div className={classes['wrapper']}>
        <Text
          size={'16px'}
          fw={800}
          style={{ marginBlockEnd: 30, textAlign: 'center' }}
        >
          تجربه‌ها
        </Text>
        <DateFilter />
        <div className={classes['day-indicator']}>
          {titleDate ? generateTitleDate(titleDate.day) : ''}
          <Button
            bg={'#ee3f56'}
            onClick={onRemoveFilter}
            className={classes['remove-filter']}
            styles={{ label: { width: 64, textAlign: 'center' } }}
          >
            حذف فیلتر
          </Button>
        </div>

        <div
          ref={rootObserverElement}
          className={classes['experience-list-wrapper']}
        >
          {experienceList.map(({ day, list }, index) => {
            return (
              <div
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                key={index}
                data-itemindex={index}
              >
                {index > 0 ? (
                  <Text
                    fw={900}
                    size={'18px'}
                    style={{ marginBottom: 12, marginTop: index > 0 ? 24 : 0 }}
                  >
                    {day.locale('fa').format('jD')}{' '}
                    {day.locale('fa').format('jMMMM')}
                  </Text>
                ) : null}
                {list.map(
                  ({ category, location, price, time, title }, index) => {
                    return (
                      <ExperienceItem
                        category={category}
                        location={location}
                        price={price}
                        time={time}
                        title={title}
                        key={index}
                      />
                    );
                  }
                )}
              </div>
            );
          })}
        </div>
      </div>
      <LoginSigninInFooter />
    </>
  );
};

const Experiences = () => {
  return (
    <ExperienceListProvider>
      <ExperienceList />
    </ExperienceListProvider>
  );
};

export default Experiences;
