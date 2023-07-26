//-----modules-----//
import classNames from "classnames";

//-----components-----//
import Button from "components/Button";
import * as Icon from "components/Icon";

//-----style-----//
import './PagePagination.scss'

const PagePagination = (props) => {
    const { classes, currentCount, lastCount } = props;
    return (
        <div className={classNames(classes, 'page-pagination')}>
            <Button classes="page-pagination__btn">
                <Icon.Prev className="btn-icon" />
            </Button>
            <Button classes="page-pagination__btn">
                <span className="btn-text">{currentCount}</span>
            </Button>
            <Button classes="page-pagination__btn">
                <span className="btn-text">{currentCount + 1}</span>
            </Button>
            <Button classes="page-pagination__btn">
                <span className="btn-text">{currentCount + 2}</span>
            </Button>
            <span className="page-pagination__dot"></span>
            <span className="page-pagination__dot"></span>
            <span className="page-pagination__dot"></span>
            <Button classes="page-pagination__btn">
                <span className="btn-text">{lastCount - 2}</span>
            </Button>
            <Button classes="page-pagination__btn">
                <span className="btn-text">{lastCount - 1}</span>
            </Button>
            <Button classes="page-pagination__btn">
                <span className="btn-text">{lastCount}</span>
            </Button>
            <Button classes="page-pagination__btn">
                <Icon.Next className="btn-icon" />
            </Button>
        </div>
    );

};

export default PagePagination;