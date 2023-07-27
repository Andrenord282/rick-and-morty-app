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

            const totalPageCount = getObjectFieldValuebyPath('info.pages', response);
            const characters = getObjectFieldValuebyPath('results', response);

            dispatch(characterListActions.initCharacters({ totalPageCount, characters }));
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
