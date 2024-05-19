import { useState, useEffect } from 'react';

import { PRODUCT_IMAGE } from '../constants/inspirationpage';

interface ImageObject {
  imageUrl: string;
}

export default function useGetProductImages() {
  const [images, setImages] = useState<ImageObject[]>([]);
  useEffect(() => {
    let isCancelled = false;

    // 이미지 데이터 로드 함수 정의
    const loadImages = async () => {
      try {
        const promises = PRODUCT_IMAGE.map((product) => fetch(`/api/images/${product}`).then((res) => res.json()));
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

  return { images };
}
