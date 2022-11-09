import {motion} from 'framer-motion';
import {Link, NavLink} from 'react-router-dom';

import Button from '../Button/Button';

import './Navbar.scss';

const Navbar = () => {

  return (
    <motion.div className="navbar">
      <h1>
        <Link to="/">
          Logo
        </Link>
      </h1>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__link">
            <NavLink
              to="/about"
            >
              About</NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              to="/skills"
            >
              Skills</NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              to="/portfolio"
            >
              Portfolio</NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              to="/contacts"
            >
              Contacts</NavLink>
          </li>
        </ul>
        <Button>
          My Button
        </Button>
      </nav>
    </motion.div>

  );
};

export default Navbar;
