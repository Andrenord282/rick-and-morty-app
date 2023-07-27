//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { useCharacterListController } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import { selectCharacterStatusFilter } from "store/characterListSlice";

//-----components-----//
import { RadioInput } from "components/RadioInput";

//-----style-----//
import './CharacterFilterStatus.scss';

const radioList = ['all', 'alive', 'dead', 'unknown'];


const CharacterFilterStatus = (props) => {
    const { classes } = props;
    const characterStatusFilter = useSelector(selectCharacterStatusFilter);
    const characterListController = useCharacterListController();

    const handleUpdateFilterGender = (value) => {
        characterListController.updateFilter('status', value);
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