//-----services-----//
import { rickAndMortyApi } from 'services/axios/api/rickAndMortyApi';

//-----utilities-----//
import { getObjectFieldValuebyPath } from 'utilities';

//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { characterListActions } from 'store/characterListSlice';

const useCharacterListController = () => {
    const dispatch = useDispatch();

    const getCharacterList = async (query) => {
        try {
            const response = await rickAndMortyApi.getCharacterList(query);

            if (response.status === 200) {
                const totalPageCount = getObjectFieldValuebyPath('info.pages', response.data);
                const characters = getObjectFieldValuebyPath('results', response.data);
                dispatch(characterListActions.initCharacters({ totalPageCount, characters }));
            } else if (response.status === 404) {
                dispatch(characterListActions.initCharacters({ totalPageCount: 0, characters: [] }));
            }

            dispatch(characterListActions.setCharacterListStatus({ status: 'loaded' }));
        } catch (error) {}
    };

    const updateNumberCurrentPage = (value) => {
        dispatch(characterListActions.setCharacterListStatus({ status: 'updating' }));
        dispatch(characterListActions.updateNumberCurrentPage({ value }));
    };

    return {
        getCharacterList,
        updateNumberCurrentPage,
    };
};

export { useCharacterListController };
