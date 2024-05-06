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
  const { handleSearchValueChange } = useSearchKeyword();
  return (
    <div className={styles.searchBarWrapper}>
      {Icon}
      <input placeholder={placeHolder} className={styles.inputSection} onChange={handleSearchValueChange} {...rest} />
      {ResetButton}
    </div>
  );
}
