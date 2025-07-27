import { Text } from '@mantine/core';
import { ReactNode } from 'react';

const TicketItem = ({
  description,
  title,
  icon,
  onClick,
}: {
  title: string;
  description: string;
  icon?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <>
      <Text style={{ marginBlockEnd: 8 }} fw={800} size='16px'>
        {title}
      </Text>
      <Text
        style={{ marginBlockEnd: 24 }}
        fw={400}
        size='16px'
        onClick={onClick}
      >
        {description}
        {icon}
      </Text>
    </>
  );
};

export { TicketItem };
