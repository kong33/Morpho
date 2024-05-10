import { ReactNode } from 'react';

import ProductAccordion from '@/feature/ProductAccordion';
import MainLayout from '@/layouts/MainLayout';
import { productData } from '@/libs/constants/productpage';
import styles from '@/pages/product/index.module.scss';

export default function product() {
  return (
    <div className={styles.productAccordionContainer}>
      <ProductAccordion productData={productData} />
    </div>
  );
}

product.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
