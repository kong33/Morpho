import { ReactNode } from 'react';

import Hero from '@/components/Hero';
import MainLayout from '@/layouts/MainLayout';
import imageUrl from '@/public/images/homeHero.jpg';

export default function Home() {
  return (
    <Hero
      type="halfImage"
      imageUrl={imageUrl}
      imageSize={{
        width: 230,
        height: 200
      }}
      title="완벽한 디자인"
      description="최고의 디자인으로 놀라운 경험을 선사합니다."
    />
  );
}
Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
