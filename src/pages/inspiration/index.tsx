// import { ReactNode } from 'react';

// import Card from '@/components/Card';
// import SearchBar from '@/components/SearchBar';
// import MainLayout from '@/layouts/MainLayout';
// import imgUrl from '@/public/images/homeHero.jpg';
// import SearchBarIcon from '@/public/svg/SearchBarIcon';
// import CloseButton from '@/public/svg/closeButton';
// import { WALLPANEL_DATA } from '@/libs/constants/ProductData/WallPanelData';
// import { useEffect, useState } from 'react';
// //데이터 가져오기

// interface ImageObject {
//   imageUrl: string;
// }
// export default function inspiration() {
//   const [images, setImages] = useState<ImageObject[]>([]);
//   const productList = ['wallPanel', 'aluminumBox', 'manufacturing', 'paintAndMarking'];

//   useEffect(() => {
//     productList.map((product) => {
//       fetch(`/api/images/${product}`)
//         .then((response) => response.json())
//         .then((data: string[]) => {
//           const imageObjects = data.map((url) => ({ imageUrl: url }));
//           setImages(imageObjects);
//           console.log(imageObjects);
//         })
//         .catch((error) => console.error('failed to load images', error));
//     });
//   }, []);
//   return (
//     <>
//       <SearchBar
//         placeHolder="키워드로 검색해보세요   ex) 콘센트, 알루미늄..."
//         Icon={<SearchBarIcon width={20} height={20} />}
//         ResetButton={<CloseButton width={20} height={20} />}
//       />
//       {WALLPANEL_DATA.map((item, index) => (
//         <Card
//           type="innerTextFullImage"
//           title={item.title as string}
//           description={item.description as string}
//           imageUrl={images[index].imageUrl}
//           isHoverAble
//         />
//       ))}
//     </>
//   );
// }

// inspiration.getLayout = function getLayout(page: ReactNode) {
//   return <MainLayout>{page}</MainLayout>;
// };
import { ReactNode, useEffect, useState } from 'react';

import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import MainLayout from '@/layouts/MainLayout';
import { WALLPANEL_DATA } from '@/libs/constants/ProductData/WallPanelData';
import styles from '@/pages/inspiration/index.module.scss';
import SearchBarIcon from '@/public/svg/SearchBarIcon';
import CloseButton from '@/public/svg/closeButton';

interface ImageObject {
  imageUrl: string;
}

export default function Inspiration() {
  const [images, setImages] = useState<ImageObject[]>([]);
  const productList = ['wallPanel', 'aluminumBox', 'manufacturing', 'paintAndMarking'];
  // WALLPANEL_DATA.shift();
  useEffect(() => {
    let isCancelled = false;

    // 이미지 데이터 로드 함수 정의
    const loadImages = async () => {
      try {
        const promises = productList.map((product) => fetch(`/api/images/${product}`).then((res) => res.json()));
        const imagesLists = await Promise.all(promises);
        const imageObjects = imagesLists.flat().map((url) => ({ imageUrl: url }));
        if (!isCancelled) {
          setImages(imageObjects);
        }
      } catch (error) {
        console.error('Failed to load images', error);
      }
    };

    loadImages();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <SearchBar
        placeHolder="키워드로 검색해보세요 ex) 콘센트, 알루미늄..."
        Icon={<SearchBarIcon width={20} height={20} />}
        ResetButton={<CloseButton width={20} height={20} />}
      />
      <div className={styles.cardsWrapper}>
        {WALLPANEL_DATA.map((item, index) => (
          <Card
            key={item.title}
            type="innerTextFullImage"
            title={item.title}
            description={item.description}
            imageUrl={images[index]?.imageUrl}
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
