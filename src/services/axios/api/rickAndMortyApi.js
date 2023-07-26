import apiServer from '../client/';

class RickAndMortyApi {
    getCharacterList = async (query) => {
        try {
            const response = await apiServer.get('/character', {
                params: {
                    ...query,
                },
            });
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.log(error.response.status, error.response.data.error);
        }
    };
}

export const rickAndMortyApi = new RickAndMortyApi();
