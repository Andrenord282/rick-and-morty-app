//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { useCharacterListController } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import { selectCharacterGenderFilter } from "store/characterListSlice";

//-----components-----//
import { RadioInput } from "components/RadioInput";

//-----style-----//
import './CharacterFilterGender.scss';


const radioList = ['all', 'female', 'male', 'genderless', 'unknown'];


const CharacterFilterGender = (props) => {
    const { classes } = props;
    const characterGenderFilter = useSelector(selectCharacterGenderFilter);
    const characterListController = useCharacterListController();

    const handleUpdateFilterGender = (value) => {
        characterListController.updateFilter('gender', value);
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