import { ReactNode } from 'react';

import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import MainLayout from '@/layouts/MainLayout';
import likeIcon from '@/public/images/likeIcon.png';
import CloseButton from '@/public/svg/CloseButton';
import SearchBarIcon from '@/public/svg/SearchBarIcon';

export default function inspiration() {
  return (
    <>
      <SearchBar
        placeHolder="키워드로 검색해보세요   ex) 콘센트, 알루미늄..."
        Icon={<SearchBarIcon width={20} height={20} />}
        ResetButton={<CloseButton width={20} height={20} />}
      />
      <Card
        type="innerTextFullImage"
        likeIcon={likeIcon}
        title="가은"
        description="gkgk"
        imageUrl="https://img.etoday.co.kr/pto_db/2014/07/20140720045734_482347_527_297.jpg"
        redirectUrl="/"
      />
    </>
  );
}

inspiration.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
