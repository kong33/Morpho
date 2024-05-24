import { useState } from 'react';

import { CATEGORY_MENU, CATEGORY_MENU_MOBILE } from '../constants';

export default function useManageCategory(isMobile: boolean) {
  const category = isMobile ? CATEGORY_MENU_MOBILE : CATEGORY_MENU;

  const [hideMenu, setHideMenu] = useState(Array(category.length).fill(false));

  const mouseEvent = (index: number, isShow: boolean) => {
    const delay = 300;

    setTimeout(() => {
      const change = [...hideMenu];
      change[index] = isShow;
      setHideMenu(change);
    }, delay);
  };

  return { hideMenu, mouseEvent };
}
