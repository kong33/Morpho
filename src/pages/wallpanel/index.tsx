import { ReactNode } from 'react';

import Card from '@/components/Card';
import Hero from '@/components/Hero';
import MainLayout from '@/layouts/MainLayout';
import useGetProductImages from '@/libs/hooks/useGetProductImages';
import styles from '@/pages/wallpanel/index.module.scss';
import wallPanelDetail from '@/public/image/ProductImage/ProductCard/wallPanel.png';

export default function WallPanel() {
  const { images: wallPanelImages } = useGetProductImages('wallPanel');
  return (
    <>
      <Hero
        type="halfImage"
        imageUrl={wallPanelDetail}
        title="Wall Panel"
        subTitle={[
          '저희는 사용자가 필요로 하는',
          '거의 모든 인터페이스를 판넬에',
          '디자인, 설치 가공하는 서비스를 제공합니다.'
        ]}
        className="wallPanelDetail"
      />
      <div className={styles.cardsWrapper}>
        {wallPanelImages.map((images) => (
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

WallPanel.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
