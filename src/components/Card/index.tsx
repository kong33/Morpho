import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/components/Card/index.module.scss';
import useIntersectionObserver from '@/libs/hooks/useIntersectionObserver';
import CardProps from '@/libs/types/CardType';

import LikeButton from '../LikeButton';

const cn = classNames.bind(styles);
export default function Card({
  type,
  title,
  descriptions,
  imageUrl,
  redirectUrl,
  isHoverAble,
  className,
  isIcon = false
}: CardProps) {
  const [isVisible, ref] = useIntersectionObserver({
    rootMargin: '100px'
  });

  const cardWrapper = cn(type, 'cardWrapper', isHoverAble ? 'cardHover' : '', className);
  const textWrapper = cn('textWrapper');
  const imageWrapper = cn(type === 'outerTextFullImage' ? 'notFull' : 'full', isHoverAble ? 'hoverAble' : '');

  return (
    <article className={cardWrapper} ref={ref}>
      {isIcon && <LikeButton />}
      <div className={imageWrapper}>
        {isVisible && <Image src={imageUrl} fill objectFit="contain" alt={title} loading="lazy" quality={0} />}
      </div>
      <div className={textWrapper}>
        <h1>{title}</h1>
        {descriptions.map((description) => (
          <p>{description}</p>
        ))}
      </div>
      {redirectUrl && (
        <Link href={redirectUrl}>
          <button type="button">Learn More</button>
        </Link>
      )}
    </article>
  );
}
