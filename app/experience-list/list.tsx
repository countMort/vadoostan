'use client';
import { DateFilter, ExperienceItem, LoginHeader } from '@/app/components';
import classes from './style.module.scss';
import moment, { Moment } from 'moment-jalaali';
import { Button, Text } from '@mantine/core';
import { ExperienceListContext } from './provider';
import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

export const ExperienceList = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { experienceList, onRemoveFilter, selectedDate } = useContext(
    ExperienceListContext
  );
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
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
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
        <div style={{ paddingInline: 20 }}>
          <LoginHeader
            style={{ marginBlockEnd: 30, marginBlockStart: 50 }}
            onBack={() => {
              router.back();
            }}
            title={'تجربه‌ها'}
          />
          <DateFilter />
          <div className={classes['day-indicator']}>
            {titleDate ? generateTitleDate(titleDate.day) : ''}
            {selectedDate ? (
              <Button
                bg={'#ee3f56'}
                onClick={onRemoveFilter}
                className={classes['remove-filter']}
                styles={{ label: { width: 64, textAlign: 'center' } }}
              >
                حذف فیلتر
              </Button>
            ) : null}
          </div>
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
                {list.map((data, index) => {
                  return <ExperienceItem key={index} {...data} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      {children}
    </>
  );
};
