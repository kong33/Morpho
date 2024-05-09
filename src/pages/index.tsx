import { ReactNode } from 'react';

import HomeContent from '@/feature/HomeContent';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  return <HomeContent />;
}
Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
