import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    characterListStatus: 'init', // 'init, 'loaded', 'reloading', 'updating'
    totalPageCount: 0,
    numberCurremtPage: 1,
    filter: {
        status: null, // 'all', 'alive', 'dead', 'unknown'
        gender: null, // 'all', 'female', 'male', 'genderless', 'unknown'
    },
    characters: [],
};

const characterListSlice = createSlice({
    name: 'characterList',
    initialState,
    reducers: {
        setCharacterListStatus: (state, action) => {
            const { status } = action.payload;

            state.characterListStatus = status;
        },

        initCharacters: (state, action) => {
            const { totalPageCount, characters } = action.payload;

            state.currentPage += 1;
            state.totalPageCount = totalPageCount;
            state.characters = [...characters];
        },

        updateNumberCurrentPage: (state, action) => {
            const { value } = action.payload;

            state.numberCurremtPage = value;
        },

        updateFilterField: (state, action) => {
            const { fieldName, value } = action.payload;

            if (value === 'all') {
                state.filter[fieldName] = null;
                return;
            }

            state.filter[fieldName] = value;
        },
    },
});

export const characterListActions = characterListSlice.actions;
export const characterListReducer = characterListSlice.reducer;
