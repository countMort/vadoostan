/* eslint-disable @next/next/no-img-element */
import useEmblaCarousel from 'embla-carousel-react';
import classes from './style.module.scss';
import { useDotButton } from './useDotBotton';
import classNames from 'classnames';

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { scrollSnaps, selectedIndex, onDotButtonClick } =
    useDotButton(emblaApi);

  const slides = [
    <div key={1} className={classes['embla__slide']}>
      <img className={classes['image']} src={'/slide1.png'} alt='slide1' />
    </div>,
    <div key={2} className={classes['embla__slide']}>
      <img className={classes['image']} src={'/slide2.png'} alt='slide2' />
    </div>,
  ];

  return (
    <div className={classes['embla']} ref={emblaRef}>
      <div className={classes['embla__container']}>
        {slides.map((item) => item)}
      </div>
      <div className={classes['dot-container']}>
        {scrollSnaps.map((_, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                onDotButtonClick(index);
              }}
              className={classNames(
                classes['dot'],
                index === selectedIndex && classes['dot--selected']
              )}
            />
          );
        })}
      </div>
    </div>
  );
};
