import { ReactNode } from 'react';

import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import MainLayout from '@/layouts/MainLayout';
import { WALLPANEL_DATA } from '@/libs/constants/ProductData/WallPanelData';
import useGetProductImages from '@/libs/hooks/useGetProductImages';
import styles from '@/pages/inspiration/index.module.scss';
import SearchBarIcon from '@/public/svg/SearchBarIcon';
import CloseButton from '@/public/svg/closeButton';

export default function Inspiration() {
  const { images: productImages } = useGetProductImages();

  return (
    <>
      <SearchBar
        placeHolder="키워드로 검색해보세요 ex) 콘센트, 알루미늄..."
        Icon={<SearchBarIcon width={20} height={20} />}
        ResetButton={<CloseButton width={20} height={20} />}
      />
      <div className={styles.cardsWrapper}>
        {productImages.map((images, index) => (
          <Card
            key={WALLPANEL_DATA[index]?.title ? WALLPANEL_DATA[index].title : 'a'}
            type="innerTextFullImage"
            title={WALLPANEL_DATA[index]?.title ? WALLPANEL_DATA[index].title : 'a'}
            description={WALLPANEL_DATA[index]?.description ? WALLPANEL_DATA[index].description : 'b'}
            imageUrl={images?.imageUrl}
            isHoverAble
          />
        ))}
      </div>
    </>
  );
}

Inspiration.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
