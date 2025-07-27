import { Button as MButton, ButtonProps, ElementProps } from '@mantine/core';
import classNames from 'classnames';
import classes from './style.module.scss';
import { colors } from '@/colors';

interface MyTextInputProps
  extends ButtonProps,
    ElementProps<'button', keyof ButtonProps> {}

const Button = ({
  children,
  radius = 10,
  fullWidth = true,
  variant = 'filled',
  bg = colors['cta-bg'],
  size = 'lg',
  ...rest
}: MyTextInputProps) => {
  return (
    <MButton
      {...rest}
      radius={radius}
      size={size}
      fullWidth={fullWidth}
      variant={variant}
      bg={bg}
      className={classNames(rest.className, classes['action-button'])}
    >
      {children}
    </MButton>
  );
};

export { Button };
