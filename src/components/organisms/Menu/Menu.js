import PropTypes from 'prop-types'
import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import Hamburgermenu from './../../atoms/Hamburgermenu';
import Closemenu from "./../../atoms/Closemenu";

const Menu = ({ testID, menuData }) => {

    const utils = ["Menu"].join(" ")
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div data-testid={ testID } className={ utils }>


            <div className="navbar" onClick={showSidebar}>
                <Link to="#" className='menu-bars'><Hamburgermenu /></Link>
            </div>

            <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle" >    
                        <Link to="#" className="menu-bars">
                        <Closemenu />
                        </Link>
                    </li>
                    {menuData.map((item, i) => {
                        return(
                            <>
                            <li key={i} className="nav-text" onClick={showSidebar}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                            </>
                        )
                    })}
                </ul>
            </nav>



        </div>
    )
};

Menu.propTypes = {
    testID: PropTypes.string
}

export default Menu;