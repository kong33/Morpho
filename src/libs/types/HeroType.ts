import { StaticImageData } from 'next/image';

export type HeroProps = {
  type: 'fullImage' | 'halfImage';
  imageUrl?: StaticImageData;
  imageSize?: { width: number; height: number };
  title?: string;
  description?: string;
  className?: string;
};

export default HeroProps;
