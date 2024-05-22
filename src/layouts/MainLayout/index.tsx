import { ReactNode } from 'react';

import Category from '@/components/Category';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header logoText="MORPHO" />
      <Category />
      <main>{children}</main>
      <Footer />
    </>
  );
}
