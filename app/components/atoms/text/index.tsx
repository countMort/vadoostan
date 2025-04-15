import { CSSProperties } from 'react';

export const Text = ({
  fw,
  size,
  c,
  style,
  children,
  className,
  lineHeight,
}: {
  c?: string;
  size?: string;
  fw?: number;
  style?: CSSProperties;
  children: string | React.ReactNode;
  className?: string;
  lineHeight?: number;
}) => {
  return (
    <div
      style={{
        ...style,
        display: 'inline-block',
        fontWeight: fw,
        fontSize: size,
        color: c,
        lineHeight: lineHeight ?? 1,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
