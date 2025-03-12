import { Button, ButtonProps, ElementProps } from '@mantine/core';
import classNames from 'classnames';
import classes from './style.module.scss';

interface MyTextInputProps
  extends ButtonProps,
    ElementProps<'button', keyof ButtonProps> {}

const ActionButton = ({ children, ...rest }: MyTextInputProps) => {
  return (
    <Button
      {...rest}
      radius={20}
      size='lg'
      fullWidth
      variant='filled'
      bg={'#FAE4D7'}
      className={classNames(rest.className, classes['action-button'])}
    >
      {children}
    </Button>
  );
};

export { ActionButton };
