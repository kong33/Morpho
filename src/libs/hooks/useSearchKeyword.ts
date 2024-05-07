import { ChangeEvent, useState } from 'react';

export default function useSearchKeyword() {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleResetButtonClick = () => {
    setSearchValue('');
  };

  return { handleSearchValueChange, searchValue, handleResetButtonClick };
}