export const selectCharacterListStatus = (state) => state.characterList.characterListStatus;
export const selectNumberCurremtPage = (state) => state.characterList.numberCurremtPage;
export const selectTotalPageCount = (state) => state.characterList.totalPageCount;


export const selectCharacterStatusFilter = (state) => state.characterList.filter.status;
export const selectCharacterGenderFilter = (state) => state.characterList.filter.gender;



export const selectCharacters = (state) => state.characterList.characters;
