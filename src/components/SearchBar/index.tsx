import { ReactElement } from 'react';

import styles from '@/components/SearchBar/index.module.scss';
import useIsMobile from '@/libs/hooks/useIsMobile';
import useSearchKeyword from '@/libs/hooks/useSearchKeyword';

export default function SearchBar({
  Icon,
  ResetButton,
  placeHolder,
  ...rest
}: {
  Icon: ReactElement;
  ResetButton: ReactElement;
  placeHolder: string;
}) {
  const { isMobile } = useIsMobile();
  const { handleSearchValueChange, handleResetButtonClick, searchValue } = useSearchKeyword();
  let className = '';
  if (isMobile) {
    className = 'mobile';
  }
  return (
    <div className={`${styles.searchBarWrapper} ${className && styles[className]}`}>
      <div className={styles.searchBarIcon}>{Icon}</div>
      <input
        placeholder={placeHolder}
        className={styles.inputSection}
        onChange={handleSearchValueChange}
        value={searchValue}
        {...rest}
      />
      <button className={styles.closeButton} onClick={handleResetButtonClick} type="button">
        {ResetButton}
      </button>
    </div>
  );
}
