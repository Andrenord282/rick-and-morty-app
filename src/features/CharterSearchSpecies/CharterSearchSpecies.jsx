//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useState } from "react";

//-----controllers-----//
import { useCharacterFilterConroller } from "controllers";

//-----components-----//
import { SearchInput } from "components/SearchInput";

const CharterSearchSpecies = (props) => {
    const { classes } = props;
    const [foundCharacterSpecies, setFoundCharacterSpecies] = useState([]);
    const characterFilterConroller = useCharacterFilterConroller();

    const handleNameRequestCharacterName = async (value) => {
        const response = await characterFilterConroller.searchFilterValue('name', value);

        const results = response.results.map((item) => {
            return item.name;
        });

        const uniqResults = Array.from(new Set(results));
        setFoundCharacterSpecies(uniqResults);
    };

    const handleUpdateFilterName = (value) => {
        characterFilterConroller.updateFilter('species', value);
        setFoundCharacterSpecies([]);
    };

    return (
        <SearchInput
            classes={classNames(classes)}
            labelText="charter species:"
            placeholder='write a species'
            foundList={foundCharacterSpecies}
            fieldIdFoundItemPath="id"
            fieldValueFoundItemPath='name'
            setFoundList={setFoundCharacterSpecies}
            selectFoundItem={handleUpdateFilterName}
            searchRequest={handleNameRequestCharacterName} />
    );

};

export default CharterSearchSpecies;