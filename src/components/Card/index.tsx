import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Card/index.module.scss';
import CardProps from '@/libs/types/CardType';

const cn = classNames.bind(styles);

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
  const cardWrapper = cn(type, className, 'cardWrapper');
  const textWrapper = cn(isTextHide ? 'hide' : 'show', 'textWrapper');
  const likeWrapper = cn('likeWrapper');

  return (
    <Link href={redirectUrl}>
      <article className={cardWrapper}>
        <div className={likeWrapper}>
          <Image src={likeIcon} width="20" height="20" alt="like" />
        </div>

        <Image src={imageUrl} fill alt={title} loading="lazy" placeholder="blur" />

        <div className={textWrapper}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  );
}
