import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productpage">Productpage</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Menu;