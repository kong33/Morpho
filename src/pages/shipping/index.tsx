import { ReactNode } from 'react';

import Hero from '@/components/Hero';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/pages/q&a/index.module.scss';
import shippingImg from '@/public/images/Price&ServicePage/shippingBanner.jpg';

export default function Shipping() {
  return (
    <>
      <Hero
        type="fullImage"
        imageUrl={shippingImg}
        title="배송"
        subTitle={[
          '몰포 조각의 모든 제품들은',
          '주문 제작 상품이기에',
          '주문 후 제작 시간과 배송 시간이 소요됩니다.',
          '급속 배송을 원하실 경우',
          '아래의 연락처로',
          '연락 부탁드립니다.'
        ]}
        description={['010-8597-0941', 'umorpho@gmail.com']}
        className="ShippingHero"
      />
      <div className={styles.heroCover} />
    </>
  );
}
Shipping.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
