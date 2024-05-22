import classNames from 'classnames/bind';
import Image from 'next/image';
import { useState, MouseEvent } from 'react';

import styles from '@/components/LikeButton/index.module.scss';
import likeIcon from '@/public/image/Icon/likeIcon.png';

const cn = classNames.bind(styles);
export default function LikeButton() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsClicked((prev) => !prev);
  };
  const buttonStyle = cn(isClicked ? 'clicked' : 'unClicked', 'buttonStyle');
  return (
    <button onClick={handleClick} className={buttonStyle} type="button">
      <Image src={likeIcon} alt="like" width="20" height="20" />
    </button>
  );
}
