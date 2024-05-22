import { ReactElement } from 'react';

import styles from '@/components/SearchBar/index.module.scss';
import useSearchKeyword from '@/libs/hooks/useSearchKeyword';

export default function SearchBar({
  Icon,
  ResetButton,
  placeHolder,
  className,
  ...rest
}: {
  Icon: ReactElement;
  ResetButton: ReactElement;
  placeHolder: string;
  className?: string;
}) {
  const { handleSearchValueChange, handleResetButtonClick, searchValue } = useSearchKeyword();
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
