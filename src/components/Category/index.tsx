import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from '@/components/Category/index.module.scss';
import { CATEGORY_MENU, CATEGORY_MENU_MOBILE } from '@/libs/constants';
import useManageCategory from '@/libs/hooks/useManageCategory';

export default function Category() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      if (aspectRatio <= 3 / 2) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { hideMenu, mouseEvent } = useManageCategory(isMobile);

  const sizeBaseCategoryMenu = isMobile ? CATEGORY_MENU_MOBILE : CATEGORY_MENU;
  return (
    <nav className={styles.categoryContainer}>
      <ul className={styles.categoryMenuWrapper}>
        {sizeBaseCategoryMenu.map((menu, idx) => (
          <li
            key={menu.name}
            className={hideMenu[idx] ? 'active' : 'none'}
            onMouseEnter={() => mouseEvent(idx, true)}
            onMouseLeave={() => mouseEvent(idx, false)}
          >
            <Link href={`/${menu.path}`}>{menu.name}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.detailMenu}>
        {sizeBaseCategoryMenu.map((menu, idx) => (
          <ul key={menu.name} onMouseEnter={() => mouseEvent(idx, true)} onMouseLeave={() => mouseEvent(idx, false)}>
            {menu.subMenus?.map((subMenu) => (
              <li key={subMenu}>
                <Link
                  href={`/${subMenu
                    .toLowerCase()
                    .replace(/[가-힣|]/g, '')
                    .replace(/\s/g, '')}`}
                >
                  {subMenu}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
}
