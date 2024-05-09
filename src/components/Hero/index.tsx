import Image from 'next/image';

import styles from '@/components/Hero/index.module.scss';
import { HeroProps } from '@/libs/types/HeroType';

export default function Hero({ type, imageUrl, title, description, className = '' }: HeroProps) {
  return (
    <div className={`${styles[type]} ${styles.HeroContainer} ${styles[className]}}`}>
      <section className={styles.textWrapper}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
      </section>
      <section className={styles.imageWrapper}>
        {imageUrl && type === 'fullImage' && <Image src={imageUrl} alt="welcomeMorpho" fill objectFit="contain" />}
        {imageUrl && type === 'halfImage' && <Image src={imageUrl} alt="welcomeMorpho" fill />}
      </section>
    </div>
  );
}
// width={imageSize?.width} height={imageSize?.height}
