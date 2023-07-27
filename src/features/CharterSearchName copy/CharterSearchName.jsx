//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useState } from "react";

//-----controllers-----//
import { useCharacterFilterConroller } from "controllers";

//-----components-----//
import { SearchInput } from "components/SearchInput";

const CharterSearchName = (props) => {
    const { classes } = props;
    const [foundCharacterName, setFoundCharacterName] = useState([]);
    const characterFilterConroller = useCharacterFilterConroller();

    const handleNameRequestCharacterName = async (value) => {
        const response = await characterFilterConroller.searchFilterValue('name', value);
        setFoundCharacterName(response.results);
    };

    const handleUpdateFilterName = (value) => {
        characterFilterConroller.updateFilter('name', value);
        setFoundCharacterName([])
    };

    return (
        <SearchInput
            classes={classNames(classes)}
            labelText="charter nname:"
            placeholder='write the name'
            foundList={foundCharacterName}
            fieldIdFoundItemPath="id"
            fieldValueFoundItemPath='name'
            setFoundList={setFoundCharacterName}
            selectFoundItem={handleUpdateFilterName}
            searchRequest={handleNameRequestCharacterName} />
    );

};

export default CharterSearchName;