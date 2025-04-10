'use client';
import { useRef, useState } from 'react';
import classes from './style.module.scss';

interface DescriptionAreaProps {
  title: React.ReactNode;
  description: React.ReactNode;
  isAccordion?: boolean;
}

const DescriptionArea = ({
  description,
  title,
  isAccordion,
}: DescriptionAreaProps) => {
  const [isOpen, setIsOpen] = useState(!isAccordion);
  const contentRef = useRef<HTMLDivElement>(null);

  const contentHeight = isOpen
    ? contentRef?.current?.scrollHeight + 'px'
    : '0px';

  const handleToggleAccordion = () => {
    if (isAccordion) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div>
      <div className={classes['divider']} />
      <div className={classes['content']}>
        <div onClick={handleToggleAccordion} className={classes['title']}>
          {title}
        </div>
        <div
          ref={contentRef}
          style={{
            maxHeight: contentHeight,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
          }}
          className={classes['description']}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export { DescriptionArea };
