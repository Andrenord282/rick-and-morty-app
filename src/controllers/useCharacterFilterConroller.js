//-----services-----//
import { rickAndMortyApi } from 'services/axios/api/rickAndMortyApi';

//-----redux-----//
import { useDispatch } from 'react-redux';

//-----actions-----//
import { characterListActions } from 'store/characterListSlice';

const useCharacterFilterConroller = () => {
    const dispatch = useDispatch();

    const searchFilterValue = async (params, value) => {
        try {
            const query = {
                [params]: value,
            };
            const response = await rickAndMortyApi.getCharacterList(query);

            return response;
        } catch (error) {}
    };

    const updateFilter = (fieldName, value) => {
        dispatch(characterListActions.updateFilterField({ fieldName, value }));
    };

    const initSearchByFilters = () => {
        dispatch(characterListActions.setCharacterListStatus({ status: 'updating' }));
        dispatch(characterListActions.updateNumberCurrentPage({ value: 1 }));
    };

    return {
        searchFilterValue,
        updateFilter,
        initSearchByFilters,
    };
};

export { useCharacterFilterConroller };
