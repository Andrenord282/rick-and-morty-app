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

    const getCharacterList = async () => {
        const response = await rickAndMortyApi.getCharacterList();
        const {} = response;

        const totalPageCount = getObjectFieldValuebyPath('info.pages', response);
        const characters = getObjectFieldValuebyPath('results', response);

        dispatch(characterListActions.initCharacters({ totalPageCount, characters }));
    };

    return {
        getCharacterList,
    };
};

export { useCharacterListController };
