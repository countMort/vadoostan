import Image from 'next/image';
import classes from './style.module.scss';

const LoginHeader = ({
  onBack,
  title,
}: {
  onBack: () => void;
  title: string;
}) => {
  return (
    <div className={classes['title-wrapper']}>
      <Image
        onClick={onBack}
        src='/Vector.svg'
        alt='backward icon'
        width={25}
        height={17}
        priority
        className={classes.icon}
      />
      <div className={classes['title']}>{title}</div>
    </div>
  );
};

export { LoginHeader };
