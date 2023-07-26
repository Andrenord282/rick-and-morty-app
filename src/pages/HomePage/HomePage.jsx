//-----widgets-----//
import CharacterList from "widgets/CharacterList";

//-----style-----//
import './HomePage.scss';

const HomePage = () => {
    return (
        <section className="home-page">
            <div className="home-page__container">
                <div className="home-page__content">
                    <CharacterList />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
