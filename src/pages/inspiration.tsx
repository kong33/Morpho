import { ReactNode } from 'react';

import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import MainLayout from '@/layouts/MainLayout';
import imgUrl from '@/public/images/homeHero.jpg';
import SearchBarIcon from '@/public/svg/SearchBarIcon';
import CloseButton from '@/public/svg/closeButton';

export default function inspiration() {
  return (
    <>
      <SearchBar
        placeHolder="키워드로 검색해보세요   ex) 콘센트, 알루미늄..."
        Icon={<SearchBarIcon width={20} height={20} />}
        ResetButton={<CloseButton width={20} height={20} />}
      />
      <Card type="hoverAble" title="가은" description="gkgk" imageUrl={imgUrl} redirectUrl="/" isHoverAble />
    </>
  );
}

inspiration.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
