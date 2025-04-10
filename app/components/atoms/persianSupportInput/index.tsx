import { PersianUtil } from '@/app/utils';
import { InputBase, InputBaseProps } from '@mantine/core';
import { IMaskInput } from 'react-imask';

interface Props extends InputBaseProps {
  withThousandsSeparator?: boolean;
  onChangeHandler: (e: string) => void;
  value?: string;
  placeholder: string;
}

const PersianSupportNumberInput = ({
  // withThousandsSeparator,
  onChangeHandler,
  value,
  placeholder,

  ...props
}: Props) => {
  return (
    <InputBase
      {...props}
      type='tel'
      component={IMaskInput}
      // mask={[
      //   {
      //     mask: 'X',
      //     blocks: {
      //       X: {
      //         mask: Number,
      //         thousandsSeparator: withThousandsSeparator ? ',' : '',
      //       },
      //     },
      //   },
      // ]}
      value={value}
      placeholder={placeholder}
      prepare={(e) => PersianUtil.currentNumberToEnglish(e)}
      onAccept={(_, masked) => {
        const unmaskedValue = masked.unmaskedValue.toString();
        onChangeHandler(unmaskedValue);
        return unmaskedValue;
      }}
    />
  );
};

export { PersianSupportNumberInput };
