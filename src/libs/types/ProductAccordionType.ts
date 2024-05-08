import { StaticImageData } from 'next/image';
import { MouseEventHandler } from 'react';

export type AccordionProps = {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  onClick: MouseEventHandler<HTMLDivElement>;
  isClicked: boolean;
  backgroundColor: string;
  className: string;
};

export type productDataType = { title: string; description: string }[];
