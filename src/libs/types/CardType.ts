import { StaticImageData } from 'next/image';

type CardProps = {
  type: 'innerTextFullImage' | 'outerTextFullImage';
  title: string;
  description: string;
  imageUrl: StaticImageData;
  redirectUrl?: string;
  isTextHide?: boolean;
  className?: string;
};

export default CardProps;
