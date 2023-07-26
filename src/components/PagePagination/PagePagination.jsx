//-----modules-----//
import classNames from "classnames";

//-----hooks-----//
import { useEffect, useState } from "react";

//-----components-----//
import Button from "components/Button";
import * as Icon from "components/Icon";

//-----style-----//
import './PagePagination.scss';

const PagePagination = (props) => {
    const {
        classes,
        steps = 2,
        currentCount,
        lastCount,
        updateNumberPage,
    } = props;
    const [numberList, setNumberList] = useState([]);

    useEffect(() => {
        if (lastCount === 0 || currentCount === 0) {
            return;
        }

        const initNumberList = [];
        let counter = 1;

        for (let index = 1; index <= lastCount; index++) {
            initNumberList.push(counter);
            counter++;
        }

        setNumberList(initNumberList);

    }, [steps, currentCount, lastCount]);

    const handleSelectPage = (e) => {
        const self = e.target;
        let newPageNumber = null;

        switch (true) {
            case self.closest('[data-btn-role="prev-page"]') !== null && currentCount > 1:
                newPageNumber = currentCount - 1;
                updateNumberPage(newPageNumber);
                return;

            case self.closest('[data-btn-role="page-number"]') !== null:
                newPageNumber = +self.closest('[data-btn-role="page-number"]').textContent;
                updateNumberPage(newPageNumber);
                break;

            case self.closest('[data-btn-role="next-page"]') !== null && currentCount < lastCount:
                newPageNumber = currentCount + 1;
                updateNumberPage(newPageNumber);
                break;

            default:
                break;
        }
    };

    const classActivePrevPage = classNames({
        '': currentCount > 1,
        'inactive': currentCount <= 1
    });

    const classActiveNextPage = classNames({
        '': currentCount < lastCount,
        'inactive': currentCount >= lastCount,
    });

    return (
        <div className={classNames(classes, 'page-pagination')}>
            <Button classes={`page-pagination__btn ${classActivePrevPage}`}
                data-btn-role="prev-page"
                handleClick={handleSelectPage}>
                <Icon.Prev className="btn-icon" />
            </Button>
            {numberList.length > 0 && numberList.length <= steps && numberList.map((number) => {
                const classSelectNumperPage = classNames({
                    'selected': number === currentCount
                });

                if (number > lastCount - steps && number <= lastCount) {
                    return (
                        <Button classes={`page-pagination__btn ${classSelectNumperPage}`}
                            key={number}
                            data-btn-role="page-number"
                            handleClick={handleSelectPage}>
                            <span className="btn-text">{number}</span>
                        </Button>
                    );
                } else {
                    return null;
                }
            })}
            {numberList.length > 0 && numberList.length > steps && numberList.map((number) => {
                const classSelectNumperPage = classNames({
                    'selected': number === currentCount
                });

                switch (true) {
                    case number === 1:
                        return (
                            <Button classes={`page-pagination__btn ${classSelectNumperPage}`}
                                key={number}
                                data-btn-role="page-number"
                                handleClick={handleSelectPage}>
                                <span className="btn-text">{number}</span>
                            </Button>
                        );
                    case number < currentCount + steps && number <= lastCount - steps && number >= currentCount:
                        return (
                            <Button classes={`page-pagination__btn ${classSelectNumperPage}`}
                                key={number}
                                data-btn-role="page-number"
                                handleClick={handleSelectPage}>
                                <span className="btn-text">{number}</span>
                            </Button>
                        );
                    default:
                        return null;
                }
            })}
            {numberList.length > steps && (
                <Button classes="page-pagination__btn 123"
                    data-btn-role="page-dots">
                    <Icon.Dots className="btn-icon" />
                </Button>
            )
            }
            {numberList.length > 0 && numberList.length > steps && numberList.map((number) => {
                const classSelectNumperPage = classNames({
                    'selected': number === currentCount
                });

                if (number > lastCount - steps && number <= lastCount) {
                    return (
                        <Button classes={`page-pagination__btn ${classSelectNumperPage}`}
                            key={number}
                            data-btn-role="page-number"
                            handleClick={handleSelectPage}>
                            <span className="btn-text">{number}</span>
                        </Button>
                    );
                } else {
                    return null;
                }

            })}
            <Button classes={`page-pagination__btn ${classActiveNextPage}`}
                data-btn-role="next-page"
                handleClick={handleSelectPage}>
                <Icon.Next className="btn-icon" />
            </Button>
        </div >
    );

};

export default PagePagination;;