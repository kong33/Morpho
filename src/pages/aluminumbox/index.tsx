import { ReactNode } from 'react';

import Card from '@/components/Card';
import Hero from '@/components/Hero';
import MainLayout from '@/layouts/MainLayout';
import useGetProductImages from '@/libs/hooks/useGetProductImages';
import styles from '@/pages/aluminumbox/index.module.scss';
import aluminumBoxDetail from '@/public/image/ProductImage/ProductCard/aluminumBox.png';

export default function AluminumBox() {
  const { images: aluminumBoxImages } = useGetProductImages('aluminumbox');
  return (
    <>
      <Hero
        type="halfImage"
        imageUrl={aluminumBoxDetail}
        title="Aluminum Box"
        subTitle={[
          '특화된 알루미늄 프로파일을 사용하여',
          '각각의 면을 컷팅, 삽입, 고정시키는 방식으로',
          '원하는 사이즈의 BOX를 제작 할 수 있습니다.'
        ]}
        className="aluminumBoxDetail"
      />
      <div className={styles.cardsWrapper}>
        {aluminumBoxImages.map((images) => (
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

AluminumBox.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
