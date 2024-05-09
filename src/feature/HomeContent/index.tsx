import Card from '@/components/Card';
import Hero from '@/components/Hero';
import styles from '@/feature/HomeContent/index.module.scss';
import { productData } from '@/libs/constants/homepage';
import imageUrl1 from '@/public/images/homeHero.jpg';

export default function HomeContent() {
  return (
    <>
      <Hero
        type="halfImage"
        imageUrl={imageUrl1}
        imageSize={{
          width: 230,
          height: 200
        }}
        title="완벽한 디자인"
        description="최고의 디자인으로 놀라운 경험을 선사합니다."
      />
      <div className={styles.cardWrapper}>
        {productData.map((data) => {
          const { type, title, description, imageUrl, redirectUrl, isHoverAble, className } = data;
          return (
            <Card
              key={title}
              type={type as 'innerTextFullImage' | 'outerTextFullImage'}
              title={title}
              description={description}
              imageUrl={imageUrl}
              isHoverAble={isHoverAble}
              redirectUrl={redirectUrl}
              className={className}
            />
          );
        })}
      </div>
    </>
  );
}
