import { ReactNode } from 'react';

import Hero from '@/components/Hero';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/pages/q&a/index.module.scss';
import qandaImg from '@/public/image/QandAPage/qandaBanner.jpg';

export default function QandA() {
  return (
    <>
      <Hero
        type="fullImage"
        imageUrl={qandaImg}
        title="Q&A"
        subTitle={['질문이 필요하시면 다음의 번호나 이메일로', '연락 부탁드립니다.']}
        description={['010-4288-0941', 'umorpho@gmail.com']}
        className="QandAHero"
      />
      <div className={styles.heroCover} />
    </>
  );
}
QandA.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
