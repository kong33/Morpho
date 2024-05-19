import { useState, useEffect } from 'react';

interface ImageObject {
  imageUrl: string;
  title: string;
  size: string;
  thickNess: string;
}

export default function useGetProductImages(folder: string) {
  const [images, setImages] = useState<ImageObject[]>([]);
  const parseFilename = (url: string) => {
    const filename = url.substring(url.lastIndexOf('/') + 1).replace(/\.[^/.]+$/, ''); // 파일 이름 추출 및 확장자 제거
    const parts = filename.split(' ');

    // size 부분 찾기
    const sizeIndex = parts.findIndex((part) => /^\d/.test(part));

    const title = parts.slice(0, sizeIndex).join(' ');
    const size = parts[sizeIndex];
    const thickness = parts.slice(sizeIndex + 1).join(' ');

    return { title, size, thickness };
  };

  useEffect(() => {
    let isCancelled = false;

    const loadImages = async () => {
      try {
        const response = await fetch(`/api/images/${folder}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch images from ${folder}`);
        }
        const imageUrls: string[] = await response.json();

        const imageObjects = imageUrls.map((url: string) => {
          const { title, size, thickness } = parseFilename(url);
          return {
            imageUrl: url,
            title,
            size,
            thickNess: thickness
          };
        });

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
  }, [folder]);

  return { images };
}
