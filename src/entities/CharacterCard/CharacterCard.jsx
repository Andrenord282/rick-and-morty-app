//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useState } from "react";

//-----entities-----//
import CharacterModal from "entities/CharacterModal";

//-----components-----//
import Button from "components/Button";

//-----style-----//
import './CharacterCard.scss';

const CharacterCard = (props) => {
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
    } = props;

    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        setToggleModal((prevToggle) => !prevToggle);
    };

    return (
        <>
            <div className={classNames(classes, 'character-card')}>
                <div className="character-card__character-img">
                    <img src={image} alt="" className="character-card__ava" />
                </div>
                <div className="character-card__character-descr">
                    <p className="character-card__title">
                        {name}
                    </p>
                    <div className="character-card__character-descr-item">
                        <p className="character-card__text">
                            {gender}
                        </p>
                        <p className="character-card__text">
                            {status}
                        </p>
                    </div>
                    <div className="character-card__character-descr-item">
                        <p className="character-card__text">
                            type: {species}
                        </p>
                        <p className="character-card__text">
                            species: {type || 'Unknown'}
                        </p>
                    </div>
                    <Button
                        classes="character-card__btn"
                        handleClick={handleToggleModal}>
                        <span className="btn-text">Detailed</span>
                    </Button>
                </div>
            </div>
            {toggleModal && (
                <CharacterModal
                    name={name}
                    status={status}
                    species={species}
                    type={type}
                    gender={gender}
                    origin={origin}
                    location={location}
                    image={image}
                    episode={episode}
                    isOpen={toggleModal}
                    onClose={handleToggleModal}
                />
            )}
        </>
    );
};

export default CharacterCard;
