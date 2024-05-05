import { ReactNode } from 'react';

import Category from '@/components/Category';
import MainLayout from '@/layouts/MainLayout';
import { CATEGORY_MENU } from '@/libs/constants';

export default function Home() {
  return <Category categoryMenu={CATEGORY_MENU} />;
}
Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
