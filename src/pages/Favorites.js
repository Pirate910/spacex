import Header from "../components/header/header";

import { cardList } from "../helpers/cardsList";
import favoritesBtn from '../img/header-like-btn.svg';
import { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "../helpers/favorites";

const Favorites = () => {

    const { favorites, handleRemove } = useContext(FavoritesContext)


    return ( 
        <>

            <Header />
            <div className="main">
                <div className="favorites">
                    <div className="favorites-container container">
                        <h1 className="favorites-title">Favorites</h1>
                    </div>
                </div>
                <ul className='card-navigation-ul'>
      
                    {favorites.map((fav) => (
                            <li className="card-navigation-el" key={fav.id}>
                                <div className="card-el-image-block">
                                    <img alt="spaceShip" className="card-image" src={fav.img} />
                                </div>
                                <div className="card-el-block-text">
                                    <h1 className="card-title">{fav.title}</h1>
                                    <p className="card-text">{fav.text}</p>
                                </div>
                                <div className="card-el-btn-block">
                                    <button className="card-btn-buy" type="button">
                                        Buy
                                    </button>
                                    <button onClick={() => handleRemove(fav.id)} className="card-btn-favorite" type="button">
                                        <img className='card-btn-favorite-btn' alt="favoritesBtn" src={favoritesBtn} />
                                    </button>

                                </div>
                            </li>
                    ))}

                </ul>

            </div>
            <div className="footer"></div>
        </>
     );
}
 
export default Favorites;