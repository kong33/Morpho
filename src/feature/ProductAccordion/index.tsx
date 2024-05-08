import { useState } from 'react';

import styles from '@/feature/ProductAccordion/index.module.scss';
import { productAccordionBackgroundColor } from '@/libs/constants';
import { productDataType } from '@/libs/types/ProductAccordionType';
import good from '@/public/images/homeHero.jpg';

import Accordion from './Accordion';

export default function ProductAccordion({ productData }: { productData: productDataType }) {
  const initialClickedList = Array.from({ length: productData.length }, () => false);

  const [clickedStatusList, setClickedStatusList] = useState(initialClickedList);
  const handleClick = (index: number) => {
    const newClickedList = clickedStatusList.map((item, idx) => idx === index);
    setClickedStatusList(newClickedList);
  };

  return (
    <div className={styles.productAccordionWrapper}>
      {productData.map((item, index) => (
        <Accordion
          key={item.title}
          title={item.title}
          imageUrl={good}
          description={item.description}
          onClick={() => handleClick(index)} // 이벤트 발생했을 떄만 실행
          isClicked={clickedStatusList[index]}
          backgroundColor={productAccordionBackgroundColor[index]}
        />
      ))}
    </div>
  );
}
