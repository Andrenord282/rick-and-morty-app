//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect } from "react";

//-----controllers-----//
import { useCharacterListController } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import { selectCharacters } from "store/characterListSlice";

//-----features-----//
import CharacterListPagination from "features/CharacterListPagination";

//-----entities-----//
import CharacterTable from "entities/CharacterTable";


//-----style-----//
import './CharacterList.scss';

const CharacterList = (props) => {
    const { classes } = props;
    const characters = useSelector(selectCharacters);

    const characterListController = useCharacterListController();

    useEffect(() => {
        characterListController.getCharacterList();
    }, []);

    return (
        <div className={classNames(classes, 'character-list')}>
            <div className="container character-list__container">
                <div className="character-list__content">
                    {characters && characters.length > 0 && characters.map((character) => {
                        return (
                            <CharacterTable classes='character-list__item' key={character.id} {...character} />
                        );
                    })}
                    <CharacterListPagination classes="character-list__pagination"/>
                </div>
            </div>
        </div>
    );

};

export default CharacterList;