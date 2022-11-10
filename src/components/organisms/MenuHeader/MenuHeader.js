import PropTypes from 'prop-types'
import React, {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import Hamburgermenu from './../../atoms/Hamburgermenu';
import Closemenu from "./../../atoms/Closemenu";
import Logo from './../../atoms/Logo'
import Cart from '../../atoms/Cart';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext'

const MenuHeader = ({ testID, menuData }) => {

    const utils = ["MenuHeader"].join(" ")
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const { cartData } = useContext(CartContext)

    return (
        <div data-testid={ testID } className={ utils }>
            
            {/* -------------------LEFT-------------- */}
            <div className="left"><Logo /></div>


            {/* ----------------RIGHT---------------- */}
            <div className="right">
            <Link to="/cart"><Cart count={cartData.length}/></Link>
                <>
                    <div className="navbar" onClick={showSidebar}>
                        <div to="../#" className='menu-bars'><Hamburgermenu /></div>
                    </div>

                    <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li key={"toggle"} className="navbar-toggle" >    
                                <div to="../#" className="menu-bars">
                                <Closemenu />
                                </div>
                            </li>
                            {menuData.map((item, i) => {
                                return(
                                    <div key={"item-"+i}>
                                    <li key={i} className="nav-text" onClick={showSidebar}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                    <hr/>
                                    </div>
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