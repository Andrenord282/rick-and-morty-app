
//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect } from "react";

//-----controllers-----//
import { useCharacterListController } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import { selectCharacterListStatus, selectNumberCurremtPage, selectCharacters, } from "store/characterListSlice";

//-----features-----//
import CharterSearchName from "features/CharterSearchName";
import CharacterFilterStatus from "features/CharacterFilterStatus";
import CharacterFilterGender from "features/CharacterFilterGender";


//-----entities-----//
import CharacterTable from "entities/CharacterTable";


//-----style-----//
import './CharacterFilter.scss';

const CharacterFilter = (props) => {
    const { classes } = props;


    return (
        <div className={classNames(classes, 'character-filter')}>
            <div className="container character-filter__container">
                <div className="character-filter__content">
                    <CharterSearchName classes='character-filter__item'/>
                    <CharacterFilterStatus classes='character-filter__item'/>
                    <CharacterFilterGender classes='character-filter__item' />
                </div>
            </div>
        </div>
    );
};

export default CharacterFilter;