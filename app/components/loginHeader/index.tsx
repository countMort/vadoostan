import classes from './style.module.scss';
import { BackIcon } from '../atoms/backIcon';

const LoginHeader = ({
  onBack,
  title,
}: {
  onBack: () => void;
  title: string;
}) => {
  return (
    <div className={classes['title-wrapper']}>
      <BackIcon onClick={onBack} className={classes.icon} />
      <div className={classes['title']}>{title}</div>
    </div>
  );
};

export { LoginHeader };
