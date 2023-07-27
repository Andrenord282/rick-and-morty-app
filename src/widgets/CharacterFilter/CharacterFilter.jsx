//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { useCharacterFilterConroller } from "controllers";

//-----features-----//
import CharterSearchName from "features/CharterSearchName";
import CharterSearchSpecies from "features/CharterSearchSpecies";
import CharacterFilterStatus from "features/CharacterFilterStatus";
import CharacterFilterGender from "features/CharacterFilterGender";

//-----components-----//
import Button from "components/Button";

//-----style-----//
import './CharacterFilter.scss';

const CharacterFilter = (props) => {
    const { classes } = props;

    const characterFilterConroller = useCharacterFilterConroller();

    const handleInitSearchByFilters = () => {
        characterFilterConroller.initSearchByFilters();
    };

    return (
        <div className={classNames(classes, 'character-filter')}>
            <div className="container character-filter__container">
                <div className="character-filter__content">
                    <CharterSearchName classes='character-filter__item' />
                    <CharterSearchSpecies classes='character-filter__item' />
                    <CharacterFilterStatus classes='character-filter__item' />
                    <CharacterFilterGender classes='character-filter__item' />
                    <Button classes='character-filter__btn' handleClick={handleInitSearchByFilters}>
                        <span className="btn-text">Search</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CharacterFilter;