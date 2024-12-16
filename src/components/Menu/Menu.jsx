import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
