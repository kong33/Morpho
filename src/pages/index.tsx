import { ReactNode } from 'react';

import MainLayout from '@/layouts/MainLayout';

export default function Home() {}
Home.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
