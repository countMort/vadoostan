'use client';
import { useEffect, useRef, useState } from 'react';
import { ExperienceItem, LoginHeader } from '../components';
import classes from './style.module.scss';
import { Text } from '@mantine/core';
import { ExperienceItemProps, ExperienceItemStatus } from '@/sharedTypes.type';
import { useRouter } from 'next/navigation';

interface mockHistoryListProps {
  active: {
    name: string;
    list: ExperienceItemProps[];
  };
  recent: {
    name: string;
    list: ExperienceItemProps[];
  };
}

const ExperienceHistory = ({ footer }: { footer: React.ReactNode }) => {
  const mockHistoryList: mockHistoryListProps = {
    active: {
      name: 'تجربیات فعال',
      list: [...new Array(30)].map(() => {
        return {
          category: 'خلق',
          title: 'جواهرسازی، ساخت گردنبند',
          location: 'توحید',
          time: '15:00',
          price: '500 هزارتومان',
          status: 'active-historial' as ExperienceItemStatus,
        };
      }),
    },
    recent: {
      list: [...new Array(15)].map(() => {
        return {
          category: 'خلق',
          title: 'جواهرسازی، ساخت گردنبند',
          location: 'توحید',
          time: '15:00',
          price: '500 هزارتومان',
          status: 'recent-historical' as ExperienceItemStatus,
        };
      }),
      name: 'تجربیات گذشته',
    },
  };
  const router = useRouter();

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

  return (
    <div className={classes['wrapper']}>
      <div style={{ paddingInline: 32 }}>
        <LoginHeader
          style={{ marginBlockEnd: 30, marginBlockStart: 50 }}
          onBack={() => {
            router.back();
          }}
          title={'تجربیات گذشته'}
        />
        <Text style={{ marginBlockEnd: 16 }} fw={900} size='18px'>
          {interSectedDateIndex === '0' ? 'تجربیات فعال' : 'تجربیات گذشته'}
        </Text>
      </div>
      <div ref={rootObserverElement} className={classes['list-wrapper']}>
        {(
          Object.entries(mockHistoryList) as [
            string,
            {
              name: string;
              list: ExperienceItemProps[];
            },
          ][]
        ).map(([, { list, name }], index) => {
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
                  {name}
                </Text>
              ) : null}
              {list.map((data, index) => {
                return <ExperienceItem key={index} {...data} />;
              })}
            </div>
          );
        })}
      </div>
      {footer}
    </div>
  );
};

export { ExperienceHistory };
