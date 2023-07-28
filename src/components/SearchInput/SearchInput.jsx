/* eslint-disable react-hooks/exhaustive-deps */
//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect, useRef, useState } from "react";
import { useInputChange } from 'hooks/useInputChange';
import { useDebounce } from 'hooks/useDebounce';
import { useEventOutside } from "hooks/useEventOutside";
import { useTabNavigateElementList } from "hooks/useTabNavigateElementList";
import { useEventKey } from "hooks/useEventKey";

//-----components-----//
import Button from "components/Button";
import * as Icon from 'components/Icon';

//-----style-----//
import './SearchInput.scss';

const SearchInput = (props) => {
    const {
        classes,
        labelText,
        placeholder,
        foundList,
        listLehgth,
        resetCurrentSelect,
        setFoundList,
        selectFoundItem,
        searchRequest,
    } = props;

    const foundListRef = useRef(null);
    const searchInputBodyRef = useRef(null);
    const searchInputRef = useRef(null);
    const searchInput = useInputChange('');
    const [searchIsLock, setSearchIsLock] = useState(false);
    const debouncedSearchValue = useDebounce(searchInput.value);

    useEventOutside(searchInputBodyRef, () => {
        if (foundList.length > 0) {
            setFoundList([]);
        }
    });

    useEventKey(27, 'keydown', () => {
        if (foundList.length > 0) {
            searchInputRef.current.focus();
            setFoundList([]);
        }
    });

    useTabNavigateElementList(foundListRef, null, () => {
        setFoundList([]);
    });

    useEffect(() => {
        if (debouncedSearchValue.length < 2 || searchIsLock === true || !searchInput.value) {
            return;
        }
        searchRequest(debouncedSearchValue);
    }, [debouncedSearchValue, searchIsLock]);

    const handleChangeSearch = (e) => {
        searchInput.onChenge(e);
        selectFoundItem(e.target.value);
        if (e.target.value.length === 0) {
            setSearchIsLock(false);
            setFoundList([]);
            resetCurrentSelect(null);
        }
    };

    const handleResetCurrentSelect = () => {
        searchInput.onReset();
        searchInputRef.current.focus();
        resetCurrentSelect(null);
        setSearchIsLock(false);
    };

    const handleSelectFoundItem = (e) => {
        selectFoundItem(e.target.textContent);
        searchInput.setValue(e.target.textContent);
        searchInputRef.current.focus();
        setSearchIsLock(true);
    };

    return (
        <div ref={searchInputBodyRef}
            className={classNames(classes, 'searcher-input')}>
            {labelText && <p className="searcher-input__title">{labelText}</p>}
            <div className="searcher-input__input-wrapper">
                <input
                    type="text"
                    ref={searchInputRef}
                    className="searcher-input__input"
                    placeholder={placeholder}
                    value={searchInput.value}
                    onChange={handleChangeSearch} />
                <Button classes='searcher-input__reset-btn'
                    handleClick={handleResetCurrentSelect}>
                    <Icon.Delete className='btn-icon' />
                </Button>
            </div>
            <div
                ref={foundListRef}
                className="searcher-input__found-list">
                {foundList && foundList.length > 0 && foundList.map((item, index) => {
                    if (listLehgth < index + 1) {
                        return null;
                    }

                    switch (true) {
                        case item !== 'not found':
                            return (
                                <Button
                                    classes='searcher-input__select-btn'
                                    key={item}
                                    data-btn-role='select-found-item'
                                    data-btn-index={index}
                                    handleClick={handleSelectFoundItem}>
                                    <span className='btn-text'>{item}</span>
                                    <Icon.Plus className='btn-icon' />
                                </Button>
                            );
                        case item === 'not found':
                            return (
                                <p
                                    className='searcher-input__not-found'
                                    key={item}>
                                    {item}
                                </p>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );

};

export default SearchInput;