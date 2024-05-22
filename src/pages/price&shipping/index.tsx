import { ReactNode } from 'react';

import MainLayout from '@/layouts/MainLayout';
import Price from '@/pages/price/index';
import styles from '@/pages/price&shipping/index.module.scss';
import Shipping from '@/pages/shipping/index';

export default function PriceAndShipping() {
  return (
    <div className={styles.pageWrapper}>
      <Price />
      <Shipping />
    </div>
  );
}
PriceAndShipping.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
