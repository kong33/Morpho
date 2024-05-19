import { EmblaOptionsType } from 'embla-carousel';

import Card from '@/components/Card';
import EmblaCarousel from '@/feature/Carousel/index';
import styles from '@/feature/HomeContent/index.module.scss';
import { productData } from '@/libs/constants/homepage';
import banner1 from '@/public/images/homeBanner/banner1.jpg';
import banner2 from '@/public/images/homeBanner/banner2.jpg';
import banner3 from '@/public/images/homeBanner/banner3.jpg';
import banner4 from '@/public/images/homeBanner/banner4.jpg';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [banner1, banner2, banner3, banner4];
console.log('a');
export default function HomeContent() {
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className={styles.cardWrapper}>
        {productData.map((data) => {
          const { type, title, description, imageUrl, redirectUrl, isHoverAble, className } = data;
          return (
            <Card
              key={title}
              type={type as 'innerTextFullImage' | 'outerTextFullImage'}
              title={title}
              description={description}
              imageUrl={imageUrl}
              isHoverAble={isHoverAble}
              redirectUrl={redirectUrl}
              className={className}
            />
          );
        })}
      </div>
    </>
  );
}
