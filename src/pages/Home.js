import Header from '../components/header/header';

import ImageCarousel from './../components/carousel/carousel';
import navLeftIcon from './../img/icons/Arrow - Left 2.svg';
import navRightIcon from './../img/icons/Arrow - Right 2.svg';
import Cards from './../components/cardsHelper/cards';
import { useContext } from 'react';
import { FavoritesContext } from '../helpers/favorites';

const Home = () => {

    return ( 
        <>
            <Header />
            <div className="main">
                <ImageCarousel />
                <div className="offer">
                    <div className="offer-container container">
                        <div className="offer-title">
                        <h1 className="offer-title-text">Popular Tours</h1>
                        <div className="offer-title-navigation">
                            <button className="title-nav-btn title-left-btn" type="button">
                                <img alt="navBtnLeft" src={navLeftIcon} />
                            </button>
                            <button className="title-nav-btn title-right-btn" type="button">
                                <img alt="navBtnRight" src={navRightIcon} />
                            </button>
                        </div>
                        </div>
                        <nav className="card-navigation-nav">
                            <Cards />
                        </nav>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;