import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const handleSetFavorites = (item) => {
    const updateFavorites = favorites.filter(fav => fav.id !== item)
    setFavorites([...updateFavorites, item])
    console.log(item)
    }

    const handleRemove = (itemId) => {
        setFavorites(favorites => favorites.filter(fav => fav.id !== itemId)); // Фильтруем избранное, удаляя по itemId
        console.log(itemId)
    };
    return (
        <FavoritesContext.Provider value={{ favorites, handleSetFavorites, handleRemove }}>
        {children}
        </FavoritesContext.Provider>
    );
};
