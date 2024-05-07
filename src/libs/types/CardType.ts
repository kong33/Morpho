import { StaticImageData } from 'next/image';

type CardProps = {
  type: 'innerTextFullImage' | 'outerTextFullImage';
  likeIcon: StaticImageData;
  title: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
  isTextHide?: boolean;
  className?: string;
};

export default CardProps;
