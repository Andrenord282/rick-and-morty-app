//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { memo, useState } from "react";

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

        if (response.status === 200) {
            const results = response.data.results.map((item) => {
                return item.name;
            });

            const uniqResults = Array.from(new Set(results));

            setFoundCharacterName(uniqResults);
        } else if (response.status === 404) {
            setFoundCharacterName(['not found']);
        }

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
            listLehgth={10}
            foundList={foundCharacterName}
            resetCurrentSelect={handleUpdateFilterName}
            setFoundList={setFoundCharacterName}
            selectFoundItem={handleUpdateFilterName}
            searchRequest={handleNameRequestCharacterName} />
    );

};

export default memo(CharterSearchName);