import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';

import MainLayout from '@/layouts/MainLayout';
import styles from '@/pages/image/index.module.scss';
// Your existing imports for the images
import Slice1 from '@/public/images/morpho/Slice 14.png';
import Slice2 from '@/public/images/morpho/Slice 15.png';
import Slice3 from '@/public/images/morpho/Slice 16.png';
import Slice4 from '@/public/images/morpho/Slice 17.png';
import Slice5 from '@/public/images/morpho/Slice 18.png';
import Slice6 from '@/public/images/morpho/Slice 19.png';
import Slice7 from '@/public/images/morpho/Slice 20.png';
// import Slice from '@/public/images/morpho/Group 252.jpg';
const images = [Slice1, Slice2, Slice3, Slice4, Slice5, Slice6, Slice7];
// const images = [Slice];
export default function ImagePage() {
  const [loadedIndexes, setLoadedIndexes] = useState([0]); // 로딩된 이미지 인덱스들을 배열로 관리

  useEffect(() => {
    const lastLoadedIndex = loadedIndexes[loadedIndexes.length - 1];
    if (lastLoadedIndex < images.length - 1) {
      const imgElement = document.createElement('img');
      imgElement.src = images[lastLoadedIndex + 1].src; // 다음 이미지를 미리 로딩
      imgElement.onload = () => {
        setLoadedIndexes([...loadedIndexes, lastLoadedIndex + 1]); // 새 인덱스를 배열에 추가
      };
    }
  }, [loadedIndexes]);

  return (
    <div className={styles.imageWrapper}>
      {loadedIndexes.map((index) => (
        <div key={index}>
          <Image
            src={images[index]}
            alt={`Image ${index}`}
            priority={index === 0} // 첫 번째 이미지는 우선적으로 로딩
            layout="responsive"
            width={700} // 이 값은 이미지의 실제 크기에 맞추어 조정하세요
            height={700} // 이 값도 마찬가지로 조정
          />
        </div>
      ))}
    </div>
  );
}
ImagePage.getLayout = function getChrome(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
