import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    characterListStatus: 'init', // 'init, 'loaded', 'reloading', 'updating'
    totalPageCount: 0,
    currentPage: 0,
    filter: {
        authorName: [],
        topics: [],
        dates: [],
        rating: [],
    },
    characters: [],
};

const characterListSlice = createSlice({
    name: 'characterList',
    initialState,
    reducers: {
        setcharacterListStatus: (state, action) => {
            const { status } = action.payload;

            state.characterListStatus = status;
        },

        initCharacters: (state, action) => {
            const { totalPageCount, characters } = action.payload;

            state.currentPage += 1;
            state.totalPageCount = totalPageCount;
            state.characters = [...characters];
        },


        setFilter: (state, action) => {
            const { filterName, value } = action.payload;

            state.filter[filterName] = [...state.filter[filterName], value];
        },

        deleteFilter: (state, action) => {
            const { filterName, deleteIndex } = action.payload;

            state.filter[filterName] = state.filter[filterName].filter(
                (_, index) => index !== deleteIndex,
            );
        },
    },
});

export const characterListActions = characterListSlice.actions;
export const characterListReducer = characterListSlice.reducer;
