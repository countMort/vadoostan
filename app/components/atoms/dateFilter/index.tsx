import classNames from 'classnames';
import classes from './style.module.scss';
import Image from 'next/image';
import moment from 'moment-jalaali';
moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' });

const DateFilter = () => {
  const today = moment();
  const dates = [...new Array(30)].map((_, index) => {
    return today.clone().add(index, 'day');
  });

  return (
    <div className={classes['wrapper']}>
      <div className={classNames(classes['arrow'], classes['arrow--right'])}>
        <Image src={'/arrow.svg'} width={5} height={8} alt='arrow' />
      </div>
      <div className={classes['list']}>
        {dates.map((date, index) => {
          return (
            <div key={index} className={classes['date-item']}>
              <div>{date.locale('fa').format('dddd')}</div>
              <div>
                {date.locale('fa').format('jD')}{' '}
                {date.locale('fa').format('jMMMM')}
              </div>
            </div>
          );
        })}
      </div>
      <div className={classNames(classes['arrow'], classes['arrow--left'])}>
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
