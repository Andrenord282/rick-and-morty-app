//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { useCharacterFilterConroller } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import { selectCharacterStatusFilter } from "store/characterListSlice";

//-----components-----//
import { RadioInput } from "components/RadioInput";

const radioList = ['all', 'alive', 'dead', 'unknown'];


const CharacterFilterStatus = (props) => {
    const { classes } = props;
    const characterStatusFilter = useSelector(selectCharacterStatusFilter);
    const characterFilterConroller = useCharacterFilterConroller();

    const handleUpdateFilterGender = (value) => {
        characterFilterConroller.updateFilter('status', value);
    };

    return (
        <RadioInput
            classes={classNames(classes)}
            labelText='select status:'
            radioType='status'
            radioList={radioList}
            radioSelected={characterStatusFilter}
            updateSelectedValue={handleUpdateFilterGender}
        />
    );
};

export default CharacterFilterStatus;