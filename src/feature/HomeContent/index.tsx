import Card from '@/components/Card';
import Hero from '@/components/Hero';
import styles from '@/feature/HomeContent/index.module.scss';
import { productData } from '@/libs/constants/homepage';
import imageUrl1 from '@/public/images/homeHeroi.png';

export default function HomeContent() {
  return (
    <>
      <Hero type="halfImage" imageUrl={imageUrl1} title="" description="" />
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
