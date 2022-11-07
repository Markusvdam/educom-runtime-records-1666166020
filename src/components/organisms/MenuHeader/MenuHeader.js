import PropTypes from 'prop-types'
import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import Hamburgermenu from './../../atoms/Hamburgermenu';
import Closemenu from "./../../atoms/Closemenu";
import Logo from './../../atoms/Logo'
import Cart from '../../atoms/Cart';

const MenuHeader = ({ testID, menuData }) => {

    const utils = ["MenuHeader"].join(" ")
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div data-testid={ testID } className={ utils }>
            
            {/* -------------------LEFT-------------- */}
            <div className="left"><Logo /></div>


            {/* ----------------RIGHT---------------- */}
            <div className="right">
            <Cart />
                <>
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
                                    <hr />
                                    </>
                                )
                            })}
                        </ul>
                    </nav>
                </>

            </div>
        </div>
    )
};

MenuHeader.propTypes = {
    testID: PropTypes.string
}

export default MenuHeader;