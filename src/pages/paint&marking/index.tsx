import { ReactNode } from 'react';

import Card from '@/components/Card';
import Hero from '@/components/Hero';
import MainLayout from '@/layouts/MainLayout';
import useGetProductImages from '@/libs/hooks/useGetProductImages';
import styles from '@/pages/paint&marking/index.module.scss';
import paintAndMarkingDetail from '@/public/image/ProductImage/ProductCard/paintMarking.png';

export default function PaintAndMarking() {
  const { images: paintAndMarkingImages } = useGetProductImages('paintAndMarking');
  return (
    <>
      <Hero
        type="halfImage"
        imageUrl={paintAndMarkingDetail}
        title="Paint & Marking"
        subTitle={['판넬 레터링과 로고 인쇄는', '음각조각 후 페인팅, UV 프린팅,', '레이저 가공 등으로 제작합니다.']}
        className="paintAndMarkingDetail"
      />
      <div className={styles.cardsWrapper}>
        {paintAndMarkingImages.map((images) => (
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

PaintAndMarking.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
