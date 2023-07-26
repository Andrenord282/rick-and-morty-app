//-----modules-----//
import classNames from "classnames";

//-----components-----//
import { PagePagination } from "components/PagePagination";

//-----style-----//
import './CharacterListPagination.scss';

const CharacterListPagination = (props) => {
    const { classes } = props;

    return (
        <div className={classNames(classes, 'character-list-pagination')}>
            <PagePagination currentCount={1} lastCount={42} />
        </div>
    );
};

export default CharacterListPagination;