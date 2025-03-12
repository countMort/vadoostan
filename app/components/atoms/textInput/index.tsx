'use client';
import { ElementProps, Input, InputProps } from '@mantine/core';
import classes from './style.module.scss';

interface MyTextInputProps
  extends InputProps,
    ElementProps<'input', keyof InputProps> {}

const TextInput = (props: MyTextInputProps) => {
  return <Input {...props} classNames={{ input: classes['name-input'] }} />;
};

export { TextInput };
