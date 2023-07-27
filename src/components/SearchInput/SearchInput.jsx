/* eslint-disable react-hooks/exhaustive-deps */
//-----modules-----//
import classNames from "classnames";

//-----utilities-----//
import { getObjectFieldValuebyPath } from "utilities/getObjectFieldValuebyPath";

//-----hooks-----//
import { useEffect, useRef, useState } from "react";
import { useInputChange } from 'hooks/useInputChange';
import { useDebounce } from 'hooks/useDebounce';

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
        fieldIdFoundItemPath,
        fieldValueFoundItemPath,
        setFoundList,
        selectFoundItem,
        searchRequest,
    } = props;

    const searchInputRef = useRef(null);
    const searchInput = useInputChange('');
    const [searchIsLock, setSearchIsLock] = useState(false);
    const debouncedSearchValue = useDebounce(searchInput.value);

    useEffect(() => {
        if (debouncedSearchValue.length < 2 || searchIsLock === true) {
            return;
        }
        searchRequest(debouncedSearchValue);
    }, [debouncedSearchValue, searchIsLock]);

    const handleChangeSearch = (e) => {
        searchInput.onChenge(e);
        if (e.target.value.length <= 2) {
            setFoundList([]);
        }
    };

    const handleSelectFoundItem = (e) => {
        selectFoundItem(e.target.textContent);
        searchInput.setValue(e.target.textContent);
        searchInputRef.current.focus();
        setSearchIsLock(true);
    };

    return (
        <div className={classNames(classes, 'searcher-input')}>
            {labelText && <p className="searcher-input__title">{labelText}</p>}
            <input
                type="text"
                ref={searchInputRef}
                className="searcher-input__input"
                placeholder={placeholder}
                value={searchInput.value}
                onChange={handleChangeSearch} />
            {foundList && foundList.length > 0 && (
                <div className="searcher-input__found-list">
                    {foundList.map((item, index) => {

                        const foundItemFieldId = getObjectFieldValuebyPath(fieldIdFoundItemPath, item);
                        const foundItemFieldValue = getObjectFieldValuebyPath(fieldValueFoundItemPath, item);

                        return (
                            <Button
                                classes='searcher-input__select-btn'
                                key={foundItemFieldId || foundItemFieldValue}
                                data-btn-role='select-found-item'
                                data-btn-index={index}
                                handleClick={handleSelectFoundItem}>
                                <span className='btn-text'>{foundItemFieldValue}</span>
                                <Icon.Plus className='btn-icon' />
                            </Button>
                        );
                    })}
                </div>
            )}
        </div>
    );

};

export default SearchInput;