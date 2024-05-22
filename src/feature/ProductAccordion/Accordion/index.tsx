/* eslint-disable */

import { AccordionProps } from '@/types/ProductAccordionType';
import Image from 'next/image';
import styles from '@/feature/ProductAccordion/Accordion/index.module.scss';
import Link from 'next/link';
export default function Accordion({
  title,
  description,
  imageUrl,
  onClick,
  isClicked,
  backgroundColor,
  className = '',
  redirectUrl
}: AccordionProps) {
  const wideStyle = isClicked ? 'wide' : '';

  if (redirectUrl) {
    return (
      <Link href={redirectUrl}>
        <div
          className={`${styles.accordionWrapper} ${styles[wideStyle]} ${styles[className]}`}
          onClick={onClick}
          style={{ backgroundColor: backgroundColor }}
        >
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              fill
              alt="product"
              placeholder="blur"
              loading="lazy"
              objectFit="contain"
              property="true"
            />
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div
      className={`${styles.accordionWrapper} ${styles[wideStyle]} ${styles[className]}`}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          fill
          alt="product"
          placeholder="blur"
          loading="lazy"
          objectFit="contain"
          property="true"
        />
      </div>
    </div>
  );
}
