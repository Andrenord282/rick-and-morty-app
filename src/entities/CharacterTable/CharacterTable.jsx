//-----modules-----//
import classNames from "classnames";

//-----components-----//
import Button from "components/Button";

//-----style-----//
import './CharacterTable.scss';

const CharacterTable = (props) => {
    const {
        classes,
        image,
        name,
        gender,
        species,
        type,
        status, } = props;

    return (
        <div className={classNames(classes, 'character-table')}>
            <div className="character-table__character-img">
                <img src={image} alt="" className="character-table__ava" />
            </div>
            <div className="character-table__character-descr">
                <p className="character-table__title">
                    {name}
                </p>
                <div className="character-table__character-descr-item">
                    <p className="character-table__text">
                        {gender}
                    </p>
                    <p className="character-table__text">
                        {status}
                    </p>
                </div>
                <div className="character-table__character-descr-item">
                    <p className="character-table__text">
                        type: {species}
                    </p>
                    <p className="character-table__text">
                        species: {type || 'Unknown'}
                    </p>
                </div>
                <Button classes="character-table__btn">
                    <span className="btn-text">Detailed</span>
                </Button>
            </div>
        </div>
    );
};

export default CharacterTable;