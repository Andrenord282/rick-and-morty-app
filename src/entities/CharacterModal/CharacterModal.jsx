
//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { useCharacterListController } from "controllers";

//-----components-----//
import Button from "components/Button";
import Modal from "components/Modal";


//-----style-----//
import './CharacterModal.scss';
import { useState } from "react";


const CharacterModal = (props) => {
    const {
        classes,
        name,
        status,
        species,
        type,
        gender,
        origin,
        location,
        image,
        episode,
        isOpen,
        onClose,
    } = props;
    const [episodeList, setEpisodeList] = useState([]);
    const characterListController = useCharacterListController();

    const handleSearchCharacterEpisodes = async () => {
        const respone = await characterListController.searchСharacterEpisodes(episode);
        setEpisodeList(respone);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}>
            <div className="character-modal">
                <div className="character-modal__character-img">
                    <img src={image} alt="" className="character-modal__ava" />
                </div>
                <div className="character-modal__character-descr">
                    <p className="character-modal__title">
                        {name}
                    </p>
                    <div className="character-modal__character-descr-item">
                        <p className="character-modal__text">
                            {gender}
                        </p>
                        <p className="character-modal__text">
                            {status}
                        </p>
                    </div>
                    <div className="character-modal__character-descr-item">
                        <p className="character-modal__text">
                            type: {species}
                        </p>
                        <p className="character-modal__text">
                            species: {type || 'Unknown'}
                        </p>
                    </div>
                    <div className="character-modal__character-descr-item">
                        <p className="character-modal__text">
                            origin name: {origin.name}
                        </p>
                        <p className="character-modal__text">
                            location name: {location.name}
                        </p>
                    </div>
                    {episodeList.length === 0 && (
                        <Button classes="character-modal__search-btn" handleClick={handleSearchCharacterEpisodes}>
                            <span className="btn-text">Search episodes</span>
                        </Button>
                    )}
                    {episodeList && episodeList.length > 0 && (
                        <div className="character-modal__character-episode-list">
                            <p className="character-modal__character-episode-list-title">
                            episodes:
                            </p>
                            {episodeList.map(({ episode }) => {
                                return (
                                    <span key={episode}
                                        className="character-modal__character-episode-list-item">
                                        {episode}
                                    </span>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};


export default CharacterModal;