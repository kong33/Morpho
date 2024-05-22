// import Link from 'next/link';

// import styles from '@/components/Category/index.module.scss';
// import { CATEGORY_MENU, CATEGORY_MENU_MOBILE } from '@/libs/constants';
// import useIsMobile from '@/libs/hooks/useIsMobile';
// import useManageCategory from '@/libs/hooks/useManageCategory';

// export default function Category() {
//   const { isMobile } = useIsMobile();
//   const { hideMenu, mouseEvent } = useManageCategory(isMobile);

//   const sizeBaseCategoryMenu = isMobile ? CATEGORY_MENU_MOBILE : CATEGORY_MENU;

//   return (
//     <nav className={styles.categoryContainer}>
//       <ul className={styles.categoryMenuWrapper}>
//         {sizeBaseCategoryMenu.map((menu, idx) => (
//           <li
//             key={menu.name}
//             className={hideMenu[idx] ? 'active' : 'none'}
//             onMouseEnter={() => mouseEvent(idx, true)}
//             onMouseLeave={() => mouseEvent(idx, false)}
//           >
//             <Link href={`/${menu.path}`}>{menu.name}</Link>
//           </li>
//         ))}
//       </ul>
//       <div className={styles.detailMenu}>
//         {sizeBaseCategoryMenu.map((menu, idx) => (
//           <ul key={menu.name} onMouseEnter={() => mouseEvent(idx, true)} onMouseLeave={() => mouseEvent(idx, false)}>
//             {menu.subMenus?.map((subMenu) => (
//               <li key={subMenu}>
//                 <Link
//                   href={`/${subMenu
//                     .toLowerCase()
//                     .replace(/[가-힣|]/g, '')
//                     .replace(/\s/g, '')}
//                     /${subMenu}.toLowerCase`}
//                 >
//                   {subMenu}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         ))}
//       </div>
//     </nav>
//   );
// }
import Link from 'next/link';

import styles from '@/components/Category/index.module.scss';
import { CATEGORY_MENU, CATEGORY_MENU_MOBILE } from '@/libs/constants';
import useIsMobile from '@/libs/hooks/useIsMobile';
import useManageCategory from '@/libs/hooks/useManageCategory';

export default function Category() {
  const { isMobile } = useIsMobile();
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
              <li key={typeof subMenu === 'string' ? subMenu : subMenu.name}>
                <Link
                  href={`/${
                    typeof subMenu === 'string'
                      ? subMenu
                          .toLowerCase()
                          .replace(/[가-힣|]/g, '')
                          .replace(/\s/g, '')
                      : subMenu.path
                  }`}
                >
                  {typeof subMenu === 'string' ? subMenu : subMenu.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </nav>
  );
}
