'use client';
import classes from './style.module.scss';
import { DescriptionArea, ExperienceOption, Carousel } from '@/app/components';
import Image from 'next/image';

const Experience = () => {
  const options = [...new Array(5)].map((_, index) => {
    return (
      <ExperienceOption
        key={index}
        icon={<Image src={'/option.svg'} width={26} height={24} alt='option' />}
        title='پذیرایی'
      />
    );
  });

  const directorInformation = (
    <div className={classes['director']}>
      <Image
        className={classes['director--image']}
        src={'/director.png'}
        width={55}
        height={55}
        alt='director-image'
      />
      <div className={classes['director--detail']}>
        <div className={classes['director--name']}>ثمین مسعودی</div>
        <div className={classes['director--role']}>برگزار کننده</div>
      </div>
    </div>
  );

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <div style={{ paddingBlockEnd: 80 }}>
        <div className={classes['carousel']}>
          <Carousel />
        </div>
        <div className={classes['title-wrapper']}>
          <div className={classes['title']}>شبِ خلق: سفالگری با چرخ</div>
          <div className={classes['abbr']}>
            <div className={classes['date']}>۱۲ بهمن، ساعت ۱۶:۰۰</div>
            <div className={classes['circle']} />
            <div className={classes['location']}>محله توحید</div>
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
          <DescriptionArea
            title={directorInformation}
            description={
              'ثمین مسعودی یک برگزارکننده خلاق رویدادهای هنری و فرهنگی است که با تمرکز بر تقویت همدلی و ارتباطات انسانی، رویداد *شب خلق و دوستان* را پایه‌گذاری کرده است. او همچنین بنیان‌گذار *استودیو هنری اثر* است، فضایی که به تولید و نمایش آثار هنری نوآورانه اختصاص دارد. ثمین با رویکردی میان‌رشته‌ای، مرزهای هنر، اجتماع و تجربه‌های مشارکتی را در هم می‌آمیزد تا بستری برای الهام‌بخشی و هم‌آفرینی میان هنرمندان و مخاطبان فراهم کند.'
            }
          />
        </div>
      </div>
      {/* <FooterActionBarTemplate>
        <div className={classes['footer-wrapper']}>
          <ActionButton style={{ width: 200, height: 60 }}>
            ثبت نام در تجربه
          </ActionButton>
          <div className={classes['price-action']}>500 هزار تومان</div>
        </div>
      </FooterActionBarTemplate> */}
    </div>
  );
};

export default Experience;
