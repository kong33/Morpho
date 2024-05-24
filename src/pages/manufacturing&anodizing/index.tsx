import { ReactNode } from 'react';

import Card from '@/components/Card';
import Hero from '@/components/Hero';
import MainLayout from '@/layouts/MainLayout';
import useGetProductImages from '@/libs/hooks/useGetProductImages';
import styles from '@/pages/manufacturing&anodizing/index.module.scss';
import manufacturingDetail from '@/public/image/ProductImage/ProductCard/manufacturingAnodizing.png';

export default function Manufacturing() {
  const { images: manufacturingImages } = useGetProductImages('manufacturing');
  return (
    <>
      <Hero
        type="halfImage"
        imageUrl={manufacturingDetail}
        title="Manufacturing & Anodizing"
        subTitle={[
          '사용자가 직접 디자인 한',
          '캐드(DXF,DEG) 파일을 가공하여',
          'SILVER, BLACK, GOLD 등 색의',
          '알루미늄 표면처리를(ANODIZING) 합니다.'
        ]}
        className="manufacturingDetail"
      />
      <div className={styles.cardsWrapper}>
        {manufacturingImages.map((images) => (
          <Card
            key={`${images?.title} ${images?.size} ${images.thickNess}`}
            type="outerTextFullImage"
            title={images?.title}
            descriptions={[images?.size || '', images?.thickNess || '']}
            imageUrl={images?.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

Manufacturing.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
