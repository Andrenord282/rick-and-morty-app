/* eslint-disable react-hooks/exhaustive-deps */
//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect, useMemo } from "react";

//-----controllers-----//
import { useCharacterListController } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import {
    selectCharacterListStatus,
    selectNumberCurremtPage,
    selectCharacters,
    selectCharacterFilters
} from "store/characterListSlice";

//-----features-----//
import CharacterListPagination from "features/CharacterListPagination";

//-----components-----//
import CharacterSkeletonList from "components/CharacterSkeletonList";

//-----entities-----//
import CharacterCard from "entities/CharacterCard";


//-----style-----//
import './CharacterList.scss';

const CharacterList = (props) => {
    const { classes } = props;
    const characterListStatus = useSelector(selectCharacterListStatus);
    const filters = useSelector(selectCharacterFilters);
    const numberCurrentPage = useSelector(selectNumberCurremtPage);
    const characters = useSelector(selectCharacters);
    const memoCharacters = useMemo(() => (characters), [characters]);
    const characterListController = useCharacterListController();

    useEffect(() => {
        if (characterListStatus === 'init' || characterListStatus === 'updating') {
            characterListController.getCharacterList({ page: numberCurrentPage, ...filters });
        }
    }, [characterListStatus, filters, numberCurrentPage]);

    return (
        <div className={classNames(classes, 'character-list')}>
            <div className="container character-list__container">
                <div className="character-list__wrapper">
                    <div className="character-list__content">
                        {characterListStatus === 'loaded' &&
                            memoCharacters &&
                            memoCharacters.length > 0 &&
                            memoCharacters.map((character) => {
                                return (
                                    <CharacterCard
                                        classes='character-list__item'
                                        key={character.id}
                                        {...character} />
                                );
                            })}
                        {characterListStatus === 'loaded' && characters.length === 0 && (
                            <p className="character-list__error">characters not found</p>
                        )}
                        {characterListStatus !== 'loaded' && (
                            <CharacterSkeletonList classes='character-list__item' count={20} />
                        )}
                    </div>
                    {characters && characters.length > 0 && <CharacterListPagination classes="character-list__pagination" />}
                </div>
            </div>
        </div>
    );

};

export default CharacterList;