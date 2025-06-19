import React from 'react';
import { SearchContainer, SearchInput, SearchButton } from '../../styles/searchBarStyles';
import { MaterialIcons } from '@expo/vector-icons';

const SearchBar = ({ onSearch }: { onSearch: (text: string) => void }) => {
  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search"
        onChangeText={onSearch}
      />
      <SearchButton>
        <MaterialIcons name="search" size={24} color="black" />
      </SearchButton>
    </SearchContainer>
  );
};
export default SearchBar;