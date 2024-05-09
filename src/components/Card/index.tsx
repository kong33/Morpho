import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Card/index.module.scss';
import CardProps from '@/libs/types/CardType';

import LikeButton from '../LikeButton';

const cn = classNames.bind(styles);

export default function Card({
  type,
  title,
  description,
  imageUrl,
  redirectUrl,
  isTextHide = false,
  className = ''
}: CardProps) {
  const cardWrapper = cn(type, className, 'cardWrapper');
  const textWrapper = cn(isTextHide ? 'hide' : 'show', 'textWrapper');
  const imageWrapper = cn(type === 'innerTextFullImage' ? 'full' : 'notFull');

  if (!redirectUrl) {
    return (
      <article className={cardWrapper}>
        <LikeButton />
        <div className={imageWrapper}>
          <Image src={imageUrl} fill alt={title} loading="lazy" placeholder="blur" />
        </div>
        <div className={textWrapper}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </article>
    );
  }
  return (
    <Link href={redirectUrl}>
      <article className={cardWrapper}>
        <LikeButton />
        <div className={imageWrapper}>
          <Image src={imageUrl} fill alt={title} loading="lazy" placeholder="blur" />
        </div>
        <div className={textWrapper}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </article>
    </Link>
  );
}
