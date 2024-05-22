import { ReactNode } from 'react';

import Hero from '@/components/Hero';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/pages/price/index.module.scss';
import priceBanner from '@/public/image/Price&ServicePage/priceBanner.jpg';

export default function Price() {
  return (
    <div className={styles.HeroWrapper}>
      <Hero
        type="fullImage"
        imageUrl={priceBanner}
        title="가격"
        subTitle={[
          '가격은 디자인마다 상이하게 책정됩니다.',
          '아래의 연락처로 연락 주시면',
          '친절히 상담해 드리겠습니다.',
          '연락 부탁드립니다.'
        ]}
        description={['010-8597-0941', 'umorpho@gmail.com']}
        className="PriceHero"
      />
      <div className={styles.heroCover} />
    </div>
  );
}
Price.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
