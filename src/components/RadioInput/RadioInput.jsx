//-----modules-----//
import classNames from "classnames";

//-----components-----//
import Button from "components/Button";
import * as Icon from "components/Icon";

//-----style-----//
import './RadioInput.scss';


const RadioInput = (props) => {
    const {
        classes,
        labelText,
        radioType,
        radioList,
        radioSelected,
        updateSelectedValue
    } = props;

    const handlerSetSelect = (e) => {
        if (e.type === 'keydown' && e.keyCode !== 13) {
            return;
        }
        const self = e.target;

        if (self.closest('[data-input-role="select-radio"]')) {
            const newSelectedRadioValue = self.closest('[data-input-role="select-radio"]').value;
            updateSelectedValue(newSelectedRadioValue);
        }
    };

    return (
        <div className={classNames(classes, 'radio-input')}>
            {labelText && <p className="radio-input__title">{labelText}</p>}
            <div className="radio-input__body">
                {radioList && radioList.length > 0 && radioList.map((value) => {
                    const initRadio = value === 'all' && radioSelected == null;
                    const selectedRadio = value === radioSelected;

                    const classActiveLabel = classNames({
                        'active': initRadio || selectedRadio
                    });

                    return (
                        <div className="radio-input__body" key={value}>
                            <Button classes={`radio-input__radio-btn ${classActiveLabel}`}
                                tabIndex='-1'>
                                <Icon.Check className="btn-icon" />
                            </Button>
                            <input
                                id={radioType + value}
                                className="radio-input__input"
                                data-input-role="select-radio"
                                type="radio"
                                value={value}
                                checked={value === radioSelected}
                                onKeyDown={handlerSetSelect}
                                onChange={handlerSetSelect} />
                            <label
                                htmlFor={radioType + value}
                                className="radio-input__label">
                                <span className="radio-input__text">{value}</span>
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RadioInput;