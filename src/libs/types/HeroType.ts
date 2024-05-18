import { StaticImageData } from 'next/image';

export type HeroProps = {
  type: 'fullImage' | 'halfImage';
  imageUrl?: StaticImageData;
  title?: string;
  description?: string;
  className?: string;
};

export default HeroProps;
