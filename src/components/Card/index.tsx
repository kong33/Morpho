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
  isHoverAble,
  className,
  isIcon = false
}: CardProps) {
  const cardWrapper = cn(type, 'cardWrapper', isHoverAble ? 'cardHover' : '', className);
  const textWrapper = cn('textWrapper');
  const imageWrapper = cn(type === 'outerTextFullImage' ? 'notFull' : 'full', isHoverAble ? 'hoverAble' : '');

  if (!redirectUrl) {
    return (
      <article className={cardWrapper}>
        {isIcon && <LikeButton />}
        <div className={imageWrapper}>
          <Image src={imageUrl} fill objectFit="contain" alt={title} loading="lazy" placeholder="blur" />
        </div>
        <div className={textWrapper}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </article>
    );
  }
  return (
    <article className={cardWrapper}>
      <Link href={redirectUrl}>
        {isIcon && <LikeButton />}
        <div className={imageWrapper}>
          <Image src={imageUrl} fill alt={title} loading="lazy" placeholder="blur" objectFit="contain" />
        </div>

        <div className={textWrapper}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Link>
    </article>
  );
}
