import Link from 'next/link';

import useManageCategory from '@/libs/hooks/useManageCategory';
import { categoryItemType } from '@/libs/types/CategoryType';

export default function Category({ categoryMenu }: { categoryMenu: categoryItemType[] }) {
  const { hideMenu, mouseEvent } = useManageCategory();
  return (
    <ul>
      {categoryMenu.map((menu, index) => (
        <li
          key={menu.name}
          className={hideMenu[index] ? 'active' : 'none'}
          onMouseEnter={() => mouseEvent(index, true)}
          onMouseLeave={() => mouseEvent(index, false)}
        >
          <Link href={`/${menu.name.toLowerCase()}`}>{menu.name}</Link>
          <ul
            key={menu.name}
            onMouseEnter={() => mouseEvent(index, true)}
            onMouseLeave={() => mouseEvent(index, false)}
          >
            {menu.subMenus?.map((detailMenu) => (
              <li key={detailMenu}>
                <Link
                  href={`/${detailMenu
                    .toLowerCase()
                    .replace(/[가-힣|]/g, '')
                    .replace(/\s/g, '')}`}
                >
                  {detailMenu}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
