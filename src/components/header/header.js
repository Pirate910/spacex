import './style.css'
import logo from './../../img/image 3.png';
import favoritesBtn from './../../img/header-like-btn.svg'
import Navigation from '../navbar/navigation';
import { NavLink } from 'react-router-dom';

const activeLink = 'header-btn-favorites favorite-btn-active';
const normalLink = 'header-btn-favorites';

const Header = () => {

    const a = () => {
        console.log("RRRR")
    }

    return ( 
        <div className="header">
            <div className="header__container container">
                <a href='/' className="header-logo-link" ><img src={logo} className="header-logo" alt="header_logo"></img></a>
                <Navigation />
                <div className='header-btn-block'>
                    <NavLink to='/favorites' className={({isActive}) => {
                        if(isActive){
                            return activeLink
                        }else{
                            return normalLink
                        }
                    }}>
                        <img alt='favoriteSelect' src={favoritesBtn}></img>
                    </NavLink>
                    <button className='header-btn-register-link' type='submit'>sign in</button>
                </div>
            </div>
        </div>
     );
}
 
export default Header