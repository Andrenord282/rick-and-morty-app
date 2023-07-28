//-----assets-----//
import headerLogo from "assets/img/svg/header-logo.svg";

//-----style-----//
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__content">
                    <Link to={'/'} className="header__link">
                        <img
                            className="header__logo"
                            src={headerLogo}
                            alt="" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
