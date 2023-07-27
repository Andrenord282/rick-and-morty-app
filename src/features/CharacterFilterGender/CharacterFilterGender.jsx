//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { useCharacterFilterConroller } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import { selectCharacterGenderFilter } from "store/characterListSlice";

//-----components-----//
import { RadioInput } from "components/RadioInput";

const radioList = ['all', 'female', 'male', 'genderless', 'unknown'];


const CharacterFilterGender = (props) => {
    const { classes } = props;
    const characterGenderFilter = useSelector(selectCharacterGenderFilter);
    const characterFilterConroller = useCharacterFilterConroller();

    const handleUpdateFilterGender = (value) => {
        characterFilterConroller.updateFilter('gender', value);
    };

    return (
        <RadioInput
            classes={classNames(classes)}
            labelText='select gender:'
            radioType='gender'
            radioList={radioList}
            radioSelected={characterGenderFilter}
            updateSelectedValue={handleUpdateFilterGender}
        />
    );
};

export default CharacterFilterGender;