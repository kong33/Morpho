import { StaticImageData } from 'next/image';

type CardProps = {
  type: 'innerTextFullImage' | 'outerTextFullImage';
  title: string;
  description: string;
  imageUrl: StaticImageData;
  isHoverAble?: boolean;
  redirectUrl?: string;
  className?: string;
  isIcon?: boolean;
};

export default CardProps;
