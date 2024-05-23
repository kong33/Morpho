import { ReactNode } from 'react';

import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import MainLayout from '@/layouts/MainLayout';
import { PRODUCT_IMAGE } from '@/libs/constants/inspirationpage';
import useGetProductImages from '@/libs/hooks/useGetProductImages';
import styles from '@/pages/inspiration/index.module.scss';
import SearchBarIcon from '@/public/svg/SearchBarIcon';
import CloseButton from '@/public/svg/closeButton';
// 빌드를 위한 주석
export default function Inspiration() {
  let imagesList = [];
  const { images: wallPanelImages } = useGetProductImages(PRODUCT_IMAGE[0]);
  const { images: aluminumBoxImages } = useGetProductImages(PRODUCT_IMAGE[1]);
  const { images: manufacturingImages } = useGetProductImages(PRODUCT_IMAGE[2]);
  const { images: paintAndMarkingImages } = useGetProductImages(PRODUCT_IMAGE[3]);

  imagesList = [wallPanelImages, aluminumBoxImages, manufacturingImages, paintAndMarkingImages].flat();
  console.log('아배포');
  return (
    <>
      <SearchBar
        placeHolder="검색 기능은 추후 추가될 예정입니다."
        Icon={<SearchBarIcon width={20} height={20} />}
        ResetButton={<CloseButton width={20} height={20} />}
      />
      <div className={styles.cardsWrapper}>
        {imagesList.map((images) => (
          <Card
            key={`${images?.title} ${images?.size} ${images.thickNess}`}
            type="innerTextFullImage"
            title={images?.title}
            descriptions={[images?.size || '', images?.thickNess || '']}
            imageUrl={images?.imageUrl}
            isHoverAble
            className="inspiration"
          />
        ))}
      </div>
    </>
  );
}

Inspiration.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
