import { useState } from 'react';

import { PRODUCT_IMAGE } from '../constants/inspirationpage';

interface ImageObject {
  imageUrl: string;
}

export default function useGetProductImages() {
  const [images, setImages] = useState<ImageObject[]>([]);

  const loadImages = async () => {
    try {
      const promises = PRODUCT_IMAGE.map((product) => fetch(`/api/images/${product}`).then((res) => res.json()));
      const imagesLists = await Promise.all(promises);
      const imageObjects = imagesLists.flat().map((url) => ({ imageUrl: url }));
      return imageObjects;
    } catch (error) {
      console.error('Failed to load images', error);
      return [];
    }
  };

  loadImages().then((loadedImages) => {
    if (loadedImages) {
      setImages(loadedImages);
    }
  });

  return { images };
}
