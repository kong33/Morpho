import { ReactNode } from 'react';

import SearchBar from '@/components/SearchBar';
import MainLayout from '@/layouts/MainLayout';
import CloseButton from '@/public/svg/CloseButton';
import SearchBarIcon from '@/public/svg/SearchBarIcon';

export default function inspiration() {
  return (
    <SearchBar
      placeHolder="키워드로 검색해보세요   ex) 콘센트, 알루미늄..."
      Icon={<SearchBarIcon width={20} height={20} />}
      ResetButton={<CloseButton width={20} height={20} />}
    />
  );
}

inspiration.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
