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

// {
//     "classes": "character-list__item",
//     "id": 5,
//     "name": "Jerry Smith",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//       "name": "Earth (Replacement Dimension)",
//       "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "location": {
//       "name": "Earth (Replacement Dimension)",
//       "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/6",
//       "https://rickandmortyapi.com/api/episode/7",
//       "https://rickandmortyapi.com/api/episode/8",
//       "https://rickandmortyapi.com/api/episode/9",
//       "https://rickandmortyapi.com/api/episode/10",
//       "https://rickandmortyapi.com/api/episode/11",
//       "https://rickandmortyapi.com/api/episode/12",
//       "https://rickandmortyapi.com/api/episode/13",
//       "https://rickandmortyapi.com/api/episode/14",
//       "https://rickandmortyapi.com/api/episode/15",
//       "https://rickandmortyapi.com/api/episode/16",
//       "https://rickandmortyapi.com/api/episode/18",
//       "https://rickandmortyapi.com/api/episode/19",
//       "https://rickandmortyapi.com/api/episode/20",
//       "https://rickandmortyapi.com/api/episode/21",
//       "https://rickandmortyapi.com/api/episode/22",
//       "https://rickandmortyapi.com/api/episode/23",
//       "https://rickandmortyapi.com/api/episode/26",
//       "https://rickandmortyapi.com/api/episode/29",
//       "https://rickandmortyapi.com/api/episode/30",
//       "https://rickandmortyapi.com/api/episode/31",
//       "https://rickandmortyapi.com/api/episode/32",
//       "https://rickandmortyapi.com/api/episode/33",
//       "https://rickandmortyapi.com/api/episode/35",
//       "https://rickandmortyapi.com/api/episode/36",
//       "https://rickandmortyapi.com/api/episode/38",
//       "https://rickandmortyapi.com/api/episode/39",
//       "https://rickandmortyapi.com/api/episode/40",
//       "https://rickandmortyapi.com/api/episode/41",
//       "https://rickandmortyapi.com/api/episode/42",
//       "https://rickandmortyapi.com/api/episode/43",
//       "https://rickandmortyapi.com/api/episode/44",
//       "https://rickandmortyapi.com/api/episode/45",
//       "https://rickandmortyapi.com/api/episode/46",
//       "https://rickandmortyapi.com/api/episode/47",
//       "https://rickandmortyapi.com/api/episode/48",
//       "https://rickandmortyapi.com/api/episode/49",
//       "https://rickandmortyapi.com/api/episode/50",
//       "https://rickandmortyapi.com/api/episode/51"
//     ],
//     "url": "https://rickandmortyapi.com/api/character/5",
//     "created": "2017-11-04T19:26:56.301Z"
//   }