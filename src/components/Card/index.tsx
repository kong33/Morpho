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
  isTextHide = false,
  className = ''
}: CardProps) {
  return (
    <Link href={redirectUrl}>
      <article className={`${styles[type]} ${styles[className]}`}>
        <div>
          <Image
            src={likeIcon}
            width="10"
            height="10"
            alt="like
              "
          />
        </div>
        <Image src={imageUrl} fill alt={title} loading="lazy" />
        <div className={isTextHide ? styles.hide : styles.show}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  );
}
