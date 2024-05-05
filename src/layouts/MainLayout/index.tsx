import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header logoText="MORPHO" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
