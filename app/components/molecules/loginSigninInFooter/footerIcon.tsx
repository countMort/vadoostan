'use client';
import { colors } from '@/colors';
import { Text } from '@mantine/core';
import { usePathname } from 'next/navigation';
import classes from './style.module.scss';
import { ExperienceListIcon, ProfileIcon } from './icons';

const FooterIcon = ({
  path,
  text,
}: {
  path: '/profile' | '/experience-list';
  text: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <div className={classes['icon-label']}>
      {path === '/profile' ? (
        <ProfileIcon isActive={isActive} />
      ) : (
        <ExperienceListIcon isActive={isActive} />
      )}
      <Text c={isActive ? colors['cta-color'] : '#000000'} size='12px' fw={800}>
        {text}
      </Text>
    </div>
  );
};

export { FooterIcon };
