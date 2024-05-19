/* eslint-disable */
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from '@/feature/Carousel/CarouselDotButton/index';
import { PrevButton, NextButton, usePrevNextButtons } from '@/feature/Carousel/CarouselArrowButton/index';
import useEmblaCarousel from 'embla-carousel-react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import styles from './index.module.scss';
import Autoplay from 'embla-carousel-autoplay';

type PropType = {
  slides: StaticImageData[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  console.log('a');
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 4000 })]);
  console.log(slides);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((item, index) => (
            <div className={styles.embla__slide} key={index}>
              <Image
                src={item.src}
                width={1000}
                height={370}
                alt="heroImage"
                placeholder="blur"
                blurDataURL={item.blurDataURL}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls_arrow}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div className={styles.embla__controls_dots}>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot} ${index === selectedIndex ? styles['embla__dot--selected'] : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
