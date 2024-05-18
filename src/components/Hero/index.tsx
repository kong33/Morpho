import Image from 'next/image';

import styles from '@/components/Hero/index.module.scss';
import { HeroProps } from '@/libs/types/HeroType';

export default function Hero({ type, imageUrl, title, subTitle, description, className = '' }: HeroProps) {
  return (
    <div className={`${styles[type]} ${styles.HeroContainer} ${styles[className]}}`}>
      <section className={styles.textWrapper}>
        {title && <h1>{title}</h1>}
        <section className={styles.subTitle}>{subTitle && subTitle.map((item) => <h2 key={item}>{item}</h2>)}</section>
        <section className={styles.description}>
          {description && description.map((item) => <p key={item}>{item}</p>)}
        </section>
      </section>
      <section className={styles.imageWrapper}>
        {imageUrl && type === 'fullImage' && <Image src={imageUrl} alt="welcomeMorpho" fill objectFit="cover" />}
        {imageUrl && type === 'halfImage' && <Image src={imageUrl} alt="welcomeMorpho" fill />}
      </section>
    </div>
  );
}
