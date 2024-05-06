import { ReactElement } from 'react';

import styles from '@/components/SearchBar/index.module.scss';
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
  const { handleSearchValueChange, handleResetButtonClick, searchValue } = useSearchKeyword();
  return (
    <div className={styles.searchBarWrapper}>
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
