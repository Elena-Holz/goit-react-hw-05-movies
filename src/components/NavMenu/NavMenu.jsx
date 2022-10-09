import { NavLink } from "react-router-dom";
import css from 'components/NavMenu/NavMenu.module.css';


const getClassActive = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : `${css.link}`;
}

export default function NavMenu() {
   return (
    <nav className={css.navmenu}>
           <div className={css.container}>
               <div className={css.row}>
                    <NavLink className={getClassActive} to="/" end>Home</NavLink>
                     <NavLink className={getClassActive} to="/movies">Movies</NavLink>
                </div>
           </div>
    </nav>
   )
}
