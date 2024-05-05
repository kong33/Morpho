import { useState } from 'react';

import { CATEGORY_MENU } from '../constants';

export default function useManageCategory() {
  const [hideMenu, setHideMenu] = useState(Array(CATEGORY_MENU.length).fill(false));

  const mouseEvent = (index: number, isShow: boolean) => {
    const change = [...hideMenu];
    change[index] = isShow;
    setHideMenu(change);
  };

  return { hideMenu, mouseEvent };
}
