import classes from './style.module.scss';
import {
  ActionButton,
  DescriptionArea,
  ExperienceOption,
} from '@/app/components';
import Image from 'next/image';

const Experience = () => {
  const options = [...new Array(5)].map((item, index) => {
    return (
      <ExperienceOption
        key={index}
        icon={
          <Image src={'./option.svg'} width={26} height={24} alt='option' />
        }
        title='پذیرایی'
      />
    );
  });
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div className={classes['carousel']} />
        <div className={classes['title-wrapper']}>
          <div className={classes['title']}>شبِ خلق: سفالگری با چرخ</div>
          <div className={classes['abbr']}>
            <div className={classes['date']}>۱۲ بهمن، ساعت ۱۶:۰۰</div>
            <div className={classes['circle']} />
            <div className={classes['location']}>محله توحید</div>
            <div className={classes['circle']} />
            <div className={classes['price']}>500 هزار تومان</div>
          </div>
        </div>
        <div className={classes['main-content-wrapper']}>
          <DescriptionArea
            title='توضیحات'
            description={
              'در این بازی، شما مثل یک کارآگاه خصوصی با جمع‌آوری سرنخ‌ها؛ هویت قاتل، سلاح مورد استفاده و محل وقوع جرم رو کشف می‌کنید.ر این بازی، شما مثل یک کارآگاه خصوصی با جمع‌آوری سرنخ‌ها؛ هویت قاتل، سلاح مورد استفاده و محل وقوع جرم رو کشف می‌کنید.'
            }
          />
          <DescriptionArea
            title='آنچه در تجربه ارائه می‌شود'
            description={
              <div className={classes['options-wrapper']}>{options}</div>
            }
          />
          <DescriptionArea
            title='سوالات متداول'
            description={
              'رداد و تغییر بلیت در صفحه شرایط و ضوابط ذکر شده است. لطفاً قبل از خرید آ.قوانین مربوط به استرداد و تغییر بلیت در صفحه شرایط و ضوابط ذکر شده  تغییر بلیت در صفحه شرایط و ضوابط ذکر شدهاست. لطفاً قبل از خرید آن را مطالعه کنید.قوانین مربوط به استرداد و تغییر بلیت در صفحه شرایط و ضوابط ذکر شده است. لطفاً قبل از خرید آن را مطالعه کنید.قوانین مربوط به استرداد و تغییر بلیت در صفحه شرایط و ضوابط ذکر شده است. لطفاً قبل از خرید آن را مطالعه کنید.'
            }
          />
        </div>
      </div>
      <div className={classes['action-bar']}>
        <ActionButton style={{ width: 240, height: 60 }}>
          ثبت نام در تجربه
        </ActionButton>
        <div className={classes['price-action']}>500 هزار تومان</div>
      </div>
    </div>
  );
};

export default Experience;
