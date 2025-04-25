import Image from 'next/image';
import classes from './style.module.scss';
import classNames from 'classnames';

const BackIcon = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div className={classNames(classes['wrapper'], className)}>
      <div
        className={classes['touch-area']}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      />
      <Image
        src='/Vector.svg'
        alt='backward icon'
        width={10}
        height={10}
        priority
      />
    </div>
  );
};

export { BackIcon };
