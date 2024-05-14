// import classNames from 'classnames/bind';
// import Image from 'next/image';
// import Link from 'next/link';

// import styles from '@/components/Card/index.module.scss';
// import CardProps from '@/libs/types/CardType';

// import LikeButton from '../LikeButton';

// const cn = classNames.bind(styles);

// export default function Card({
//   type,
//   title,
//   description,
//   imageUrl,
//   redirectUrl,
//   isHoverAble,
//   className,
//   isIcon = false
// }: CardProps) {
//   const cardWrapper = cn(type, 'cardWrapper', isHoverAble ? 'cardHover' : '', className);
//   const textWrapper = cn('textWrapper');
//   const imageWrapper = cn(type === 'outerTextFullImage' ? 'notFull' : 'full', isHoverAble ? 'hoverAble' : '');

//   if (!redirectUrl) {
//     return (
//       <article className={cardWrapper}>
//         {isIcon && <LikeButton />}
//         <div className={imageWrapper}>
//           <Image
//             src={imageUrl}
//             fill
//             objectFit="contain"
//             alt={title}
//             loading="lazy"
//             //placeholder="blur"
//             // blurDataURL={
//             //   'https://images.unsplash.com/photo-1562052579-b30d05e1ec93?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//             // }
//           />
//         </div>
//         <div className={textWrapper}>
//           <h1>{title}</h1>
//           <p>{description}</p>
//         </div>
//       </article>
//     );
//   }
//   return (
//     <article className={cardWrapper}>
//       <Link href={redirectUrl}>
//         {isIcon && <LikeButton />}
//         <div className={imageWrapper}>
//           <Image
//             src={imageUrl}
//             fill
//             alt={title}
//             loading="lazy"
//             //placeholder="blur"
//             //blurDataURL={}
//             quality={75}
//             objectFit="contain"
//           />
//         </div>

//         <div className={textWrapper}>
//           <h1>{title}</h1>
//           <p>{description}</p>
//         </div>
//       </Link>
//     </article>
//   );
// }

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
  description,
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
        <p>{description}</p>
      </div>
      {redirectUrl && (
        <Link href={redirectUrl}>
          <button type="button">Learn More</button>
        </Link>
      )}
    </article>
  );
}
