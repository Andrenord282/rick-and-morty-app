//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect, useState } from "react";

//-----components-----//
import Button from "components/Button";
import * as Icon from "components/Icon";

//-----style-----//
import './RadioInput.scss';


const RadioInput = (props) => {
    const { classes, labelText, radioType, radioList, radioSelected, updateSelectedValue } = props;

    const handlerSetSelect = (e) => {
        const self = e.target;

        if (self.closest('[data-label-role="select-radio"]')) {
            const newSelectedRadioValue = self.closest('[data-label-role="select-radio"]').textContent;
            updateSelectedValue(newSelectedRadioValue);
        }
    };

    return (
        <div className={classNames(classes, 'radio-input')}>
            <p className="radio-input__title">{labelText}</p>
            <div className="radio-input__body">
                {radioList && radioList.length > 0 && radioList.map((value) => {
                    const initRadio = value === 'all' && radioSelected == null;
                    const selectedRadio = value === radioSelected;

                    const classActiveLabel = classNames({
                        'active': initRadio || selectedRadio
                    });

                    return (
                        <label
                            key={value}
                            htmlFor={radioType + value}
                            className="radio-input__label"
                            data-label-role="select-radio">
                            <Button classes={`radio-input__radio-btn ${classActiveLabel}`}>
                                <Icon.Check className="btn-icon" />
                            </Button>
                            <input
                                id={radioType + value}
                                className="radio-input__value"
                                type="radio"
                                value={value}
                                checked={value === radioSelected}
                                onChange={handlerSetSelect}
                            />
                            <span className="radio-input__text">{value}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default RadioInput;