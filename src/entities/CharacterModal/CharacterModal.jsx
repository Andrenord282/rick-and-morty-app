//-----hooks-----//
import { useEffect, useRef, useState } from "react";

//-----controllers-----//
import { useCharacterListController } from "controllers";

//-----components-----//
import * as Icon from "components/Icon";
import Button from "components/Button";
import Modal from "components/Modal";

//-----style-----//
import './CharacterModal.scss';


const CharacterModal = (props) => {
    const {
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
    const modalCloseBtnRef = useRef(null);
    const [loadingEpisodeList, setLoadingEpisodeList] = useState(false);
    const [episodeList, setEpisodeList] = useState([]);
    const characterListController = useCharacterListController();

    useEffect(() => {
        modalCloseBtnRef?.current.focus();
    }, []);

    const handleCloseModal = () => {
        onClose();
    };

    const handleSearchCharacterEpisodes = async () => {
        modalCloseBtnRef?.current.focus();
        setLoadingEpisodeList(true);
        const respone = await characterListController.searchСharacterEpisodes(episode);
        setEpisodeList(respone);
        setLoadingEpisodeList(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}>
            <div className="character-modal">
                <Button
                    ref={modalCloseBtnRef}
                    classes="character-modal__close-btn"
                    handleClick={handleCloseModal}>
                    <Icon.Close className="btn-icon" />
                </Button>
                <div className="character-modal__basic-info">
                    <div className="character-modal__character-img">
                        <img src={image} alt="" className="character-modal__ava" />
                    </div>
                    <div className="character-modal__characteristics">
                        <p className="character-modal__title">
                            {name}
                        </p>
                        <p className="character-modal__text">
                            {gender}
                        </p>
                        <p className="character-modal__text">
                            {status}
                        </p>
                    </div>
                </div>
                <div className="character-modal__additional-info">
                    <p className="character-modal__text">
                        type: {species}
                    </p>
                    <p className="character-modal__text">
                        species: {type || 'Unknown'}
                    </p>
                    <p className="character-modal__text">
                        origin name: {origin.name}
                    </p>
                    <p className="character-modal__text">
                        location name: {location.name}
                    </p>
                    {episodeList.length === 0 && (
                        <Button classes="character-modal__search-btn" handleClick={handleSearchCharacterEpisodes}>
                            <span className="btn-text">Search episodes</span>
                        </Button>
                    )}
                    {loadingEpisodeList && (
                        <Icon.Spinner />
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