import apiServer from '../client/';

class RickAndMortyApi {
    getCharacterList = async (query) => {
        try {
            const response = await apiServer.get('/character', {
                params: {
                    ...query,
                },
            });

            return response;
        } catch (error) {
            return {
                status: error.response.status,
                message: error.response.data.error,
            };
        }
    };

    getCharacterEpisode = async (id) => {
        try {
            const response = await apiServer.get(`/episode/${id}`);

            return response;
        } catch (error) {
            return {
                status: error.response.status,
                message: error.response.data.error,
            };
        }
    };
}

export const rickAndMortyApi = new RickAndMortyApi();
