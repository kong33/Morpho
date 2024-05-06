import { ReactNode } from 'react';

import Category from '@/components/Category';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CATEGORY_MENU } from '@/libs/constants';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header logoText="MORPHO" />
      <Category categoryMenu={CATEGORY_MENU} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
