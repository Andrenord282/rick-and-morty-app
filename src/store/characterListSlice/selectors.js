export const selectCharacterListStatus = (state) => state.characterList.characterListStatus;
export const selectNumberCurremtPage = (state) => state.characterList.numberCurremtPage;
export const selectTotalPageCount = (state) => state.characterList.totalPageCount;
export const selectCharacterFilters = (state) => state.characterList.filters;
export const selectCharacterStatusFilter = (state) => state.characterList.filters.status;
export const selectCharacterGenderFilter = (state) => state.characterList.filters.gender;
export const selectCharacters = (state) => state.characterList.characters;
