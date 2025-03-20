import Image from 'next/image';
const BackIcon = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <Image
      onClick={onClick}
      src='/Vector.svg'
      alt='backward icon'
      width={7}
      height={13}
      priority
      className={className}
    />
  );
};

export { BackIcon };
