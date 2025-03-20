import {
  DateFilter,
  ExperienceItem,
  LoginSigninInFooter,
} from '@/app/components';
import classes from './style.module.scss';
import moment from 'moment-jalaali';
import { Text } from '@mantine/core';
moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

const ExperienceList = () => {
  const today = moment();
  const mockExperiences = [...new Array(30)].map((_, index) => {
    return {
      day: today.clone().add(index, 'day'),
      list: [...new Array(10)].map(() => {
        return {
          category: 'خلق',
          title: 'جواهرسازی، ساخت گردنبند',
          location: 'توحید',
          time: '15:00',
          price: '500 هزارتومان',
        };
      }),
    };
  });

  return (
    <>
      <div className={classes['wrapper']}>
        <div className={classes['title']}>تجربه‌ها</div>
        <DateFilter />
        <div className={classes['experience-list-wrapper']}>
          <div className={classes['experience-list']}>
            {mockExperiences.map(({ day, list }, index) => {
              return (
                <div key={index}>
                  <Text
                    fw={900}
                    size={'18px'}
                    c={'#FF7118'}
                    style={{ marginBottom: 12, marginTop: 24 }}
                  >
                    {day.locale('fa').format('jD')}{' '}
                    {day.locale('fa').format('jMMMM')}
                  </Text>
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
      </div>
      <LoginSigninInFooter />
    </>
  );
};

export default ExperienceList;
