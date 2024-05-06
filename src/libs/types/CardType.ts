import { ReactElement } from 'react';

type CardProps = {
  type: 'innerTextFullImage' | ' outerTextFullImage';
  likeIcon: ReactElement;
  title: string;
  description: string;
  imageUrl: string;
  redirectUrl: string;
  isTextHide?: boolean;
};

export default CardProps;
