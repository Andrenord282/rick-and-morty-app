//-----modules-----//
import classNames from "classnames";

//-----utilities-----//
import { getObjectFieldValuebyPath } from "utilities/getObjectFieldValuebyPath";

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

        const results = response.results.map((item) => {
            return item.name;
        });

        const uniqResults = Array.from(new Set(results));
        setFoundCharacterName(uniqResults);
    };

    const handleUpdateFilterName = (value) => {
        characterFilterConroller.updateFilter('name', value);

        if (foundCharacterName.length > 0) {
            setFoundCharacterName([]);
        }
    };

    return (
        <SearchInput
            classes={classNames(classes)}
            labelText="charter name:"
            placeholder='write the name'
            foundList={foundCharacterName}
            resetCurrentSelect={handleUpdateFilterName}
            setFoundList={setFoundCharacterName}
            selectFoundItem={handleUpdateFilterName}
            searchRequest={handleNameRequestCharacterName} />
    );

};

export default CharterSearchName;