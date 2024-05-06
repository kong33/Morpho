import Link from 'next/link';

import styles from '@/components/Category/index.module.scss';
import useManageCategory from '@/libs/hooks/useManageCategory';
import { categoryItemType } from '@/libs/types/CategoryType';

export default function Category({ categoryMenu }: { categoryMenu: categoryItemType[] }) {
  const { hideMenu, mouseEvent } = useManageCategory();
  return (
    <nav className={styles.categoryContainer}>
      <ul className={styles.categoryMenuWrapper}>
        {categoryMenu.map((menu, idx) => (
          <li
            key={menu.name}
            className={hideMenu[idx] ? 'active' : 'none'}
            onMouseEnter={() => mouseEvent(idx, true)}
            onMouseLeave={() => mouseEvent(idx, false)}
          >
            <Link href={`/${menu.name.toLowerCase()}`}>{menu.name}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.detailMenu}>
        {categoryMenu.map((menu, idx) => (
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
