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
                dispatch(
                    characterListActions.initCharacters({ totalPageCount: 0, characters: [] }),
                );
            }

            dispatch(characterListActions.setCharacterListStatus({ status: 'loaded' }));
        } catch (error) {}
    };

    const searchСharacterEpisodes = async (episodes) => {
        try {
            const requestList = [];

            if (episodes.length > 0) {
                for (const episode of episodes) {
                    const id = episode.replace('https://rickandmortyapi.com/api/episode/', '');
                    const response = await rickAndMortyApi.getCharacterEpisode(id);
                    requestList.push(response);
                }
                return Promise.all(requestList)
                    .then((results) => {
                        const response = [];
                        results.forEach((result) => {
                            if (result.status === 200) {

                                response.push({
                                    episode: result.data.episode,
                                    name: result.data.name,
                                });
                            }
                        });
                        return response
                    })
                    .catch((error) => {
                    });
            } else {
                return;
            }
        } catch (error) {}
    };

    const updateNumberCurrentPage = (value) => {
        dispatch(characterListActions.setCharacterListStatus({ status: 'updating' }));
        dispatch(characterListActions.updateNumberCurrentPage({ value }));
    };

    return {
        getCharacterList,
        searchСharacterEpisodes,
        updateNumberCurrentPage,
    };
};

export { useCharacterListController };
