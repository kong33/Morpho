import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Card/index.module.scss';
import CardProps from '@/libs/types/CardType';

export default function Card({
  type,
  likeIcon,
  title,
  description,
  imageUrl,
  redirectUrl,
  isTextHide = false
}: CardProps) {
  return (
    <Link href={redirectUrl}>
      <article className={styles[type]}>
        <div>{likeIcon}</div>
        <Image src={imageUrl} fill alt={title} loading="lazy" placeholder="blur" />
        <div className={isTextHide ? styles.hide : styles.show}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  );
}
