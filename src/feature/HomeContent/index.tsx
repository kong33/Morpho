import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';

import Card from '@/components/Card';
import EmblaCarousel from '@/feature/Carousel/index';
import styles from '@/feature/HomeContent/index.module.scss';
import { productData } from '@/libs/constants/homepage';
import useIsMobile from '@/libs/hooks/useIsMobile';

import banner1 from '@/public/image/HomePage/homeBanner/banner1.jpg';
import banner2 from '@/public/image/HomePage/homeBanner/banner2.jpg';
import banner3 from '@/public/image/HomePage/homeBanner/banner3.jpg';
import banner4 from '@/public/image/HomePage/homeBanner/banner4.jpg';
import banner5 from '@/public/image/HomePage/homeBanner/banner5.jpg';
import banner1Mb from '@/public/image/HomePage/homeBanner_mobile/banner1.jpg';
import banner2Mb from '@/public/image/HomePage/homeBanner_mobile/banner2.jpg';
import banner3Mb from '@/public/image/HomePage/homeBanner_mobile/banner3.jpg';
import banner4Mb from '@/public/image/HomePage/homeBanner_mobile/banner4.jpg';
import banner5Mb from '@/public/image/HomePage/homeBanner_mobile/banner5.jpg';
import middleBanner from '@/public/image/HomePage/homeLowerBanner/homeMiddleBanner.jpg';
import middleBannerMB from '@/public/image/HomePage/homeLowerBanner/homeMiddleBanner_mobile.jpg';

const OPTIONS: EmblaOptionsType = { loop: true };

export default function HomeContent() {
  let SLIDES = [banner1, banner2, banner3, banner4, banner5];
  let middleBannerImg = middleBanner;
  const { isMobile } = useIsMobile();
  if (isMobile) {
    SLIDES = [banner1Mb, banner2Mb, banner3Mb, banner4Mb, banner5Mb];
    middleBannerImg = middleBannerMB;
  }

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className={styles.cardWrapper}>
        {productData.map((data) => {
          const { type, title, descriptions, imageUrl, redirectUrl, isHoverAble, className } = data;
          return (
            <Card
              key={title}
              type={type as 'innerTextFullImage' | 'outerTextFullImage'}
              title={title}
              descriptions={descriptions}
              imageUrl={imageUrl}
              isHoverAble={isHoverAble}
              redirectUrl={redirectUrl}
              className={className}
            />
          );
        })}
      </div>
      <div className={styles.halfBackground}>
        <div className={styles.middleBanner}>
          <Image
            src={middleBannerImg}
            alt="middleBanner"
            width={0}
            height={0}
            style={{ width: 'min(100%, 1920px)', height: 'auto' }}
          />
        </div>
      </div>
    </>
  );
}
