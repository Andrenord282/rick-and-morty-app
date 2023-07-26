//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect } from "react";

//-----components-----//
import Button from "components/Button";

//-----style-----//
import './CharacterTable.scss';

const CharacterTable = (props) => {
    const { classes, image, name, gender, species, type, status, } = props;

    return (
        <div className={classNames(classes, 'character-table')}>
            <div className="character-table__character-img">
                <img src={image} alt="" className="character-table__ava" />
            </div>
            <div className="character-table__character-descr">
                <p className="character-table__title">
                    {name}
                </p>
                <div className="character-table__character-descr-item">
                    <p className="character-table__text">
                        {gender}
                    </p>
                    <p className="character-table__text">
                        {status}
                    </p>
                </div>
                <div className="character-table__character-descr-item">
                    <p className="character-table__text">
                        type: {species}
                    </p>
                    <p className="character-table__text">
                        species: {type || 'Unknown'}
                    </p>
                </div>
                <Button classes="character-table__btn">
                    <span className="btn-text">Detailed</span>
                </Button>

            </div>

        </div>
    );
};
// Можно фильтровать персонажей по имени, статусу, виду, типу и полу.
// Пользователь может удобно просматривать всех персонажей и информацию о них (имя, статус, гендер), предоставляемые API.
// {
//     "id": 7,
//     "name": "Abradolf Lincler",
//     "status": "unknown",
//     "species": "Human",
//     "type": "Genetic experiment",
//     "gender": "Male",
//     "origin": {
//       "name": "Earth (Replacement Dimension)",
//       "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "location": {
//       "name": "Testicle Monster Dimension",
//       "url": "https://rickandmortyapi.com/api/location/21"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/10",
//       "https://rickandmortyapi.com/api/episode/11"
//     ],
//     "url": "https://rickandmortyapi.com/api/character/7",
//     "created": "2017-11-04T19:59:20.523Z"
//   }

export default CharacterTable;