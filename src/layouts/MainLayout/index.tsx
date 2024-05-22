import { ReactNode } from 'react';

import Category from '@/components/Category';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CATEGORY_MENU, CATEGORY_MENU_MOBILE } from '@/libs/constants';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header logoText="MORPHO" />
      <Category categoryMenu={[CATEGORY_MENU, CATEGORY_MENU_MOBILE]} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
