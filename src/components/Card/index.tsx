import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';

import styles from '@/components/Card/index.module.scss';
import CardProps from '@/libs/types/CardType';

import LikeButton from '../LikeButton';

const cn = classNames.bind(styles);

export default function Card({ type, title, description, imageUrl, redirectUrl, isHoverAble, className }: CardProps) {
  const cardWrapper = cn(type, className, 'cardWrapper', isHoverAble ? 'cardHover' : '');
  const textWrapper = cn('textWrapper');
  const imageWrapper = cn(type === 'outerTextFullImage' ? 'notFull' : 'full', isHoverAble ? 'hoverAble' : '');
  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add('hover-active');
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('hover-active');
  };
  if (!redirectUrl) {
    return (
      <article className={cardWrapper}>
        <LikeButton />
        <div className={imageWrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
    <article className={cardWrapper}>
      <Link href={redirectUrl}>
        <LikeButton />
        <div className={imageWrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Image src={imageUrl} fill alt={title} loading="lazy" placeholder="blur" />
        </div>

        <div className={textWrapper}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Link>
    </article>
  );
}
