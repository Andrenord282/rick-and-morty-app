//-----modules-----//
import classNames from "classnames";

//-----controllers-----//
import { useCharacterListController } from "controllers";

//-----redux-----//
import { useSelector } from "react-redux";

//-----selectors-----//
import { selectNumberCurremtPage, selectTotalPageCount } from "store/characterListSlice";

//-----components-----//
import { PagePagination } from "components/PagePagination";

const CharacterListPagination = (props) => {
    const { classes } = props;
    const numberCurrentPage = useSelector(selectNumberCurremtPage);
    const totalPageCount = useSelector(selectTotalPageCount);

    const characterListController = useCharacterListController();

    const handleUpdateNumberCurrentPage = (value) => {
        characterListController.updateNumberCurrentPage(value);
    };

    return (
        <PagePagination
            classes={classNames(classes, 'character-list-pagination')}
            steps={4}
            currentCount={numberCurrentPage}
            lastCount={totalPageCount}
            updateNumberPage={handleUpdateNumberCurrentPage} />
    );
};

export default CharacterListPagination;