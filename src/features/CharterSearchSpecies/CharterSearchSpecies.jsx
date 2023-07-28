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

    const handleNameRequestCharacterSpecies = async (value) => {
        const response = await characterFilterConroller.searchFilterValue('species', value);

        if (response.status === 200) {
            const results = response.data.results.map((item) => {
                return item.species;
            });
            console.log(results);
            const uniqResults = Array.from(new Set(results));

            setFoundCharacterSpecies(uniqResults);
        } else if (response.status === 404) {
            setFoundCharacterSpecies(['not found']);
        }

    };

    const handleUpdateFilterSpecies = (value) => {
        characterFilterConroller.updateFilter('species', value);
        setFoundCharacterSpecies([]);
    };

    return (
        <SearchInput
            classes={classNames(classes)}
            labelText="charter species:"
            placeholder='write a species'
            listLehgth={10}
            foundList={foundCharacterSpecies}
            fieldIdFoundItemPath="id"
            fieldValueFoundItemPath='name'
            resetCurrentSelect={handleUpdateFilterSpecies}
            setFoundList={setFoundCharacterSpecies}
            selectFoundItem={handleUpdateFilterSpecies}
            searchRequest={handleNameRequestCharacterSpecies} />
    );

};

export default CharterSearchSpecies;