import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom';

import Logo from '../Logo/Logo';
import SocialLinksMenu from '../SocialLinksMenu/SocialLinksMenu';

import './Navbar.scss';

const Navbar = () => {

  return (
    <motion.div className="navbar">
      <Logo/>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              className="navigation__link"
              to="/about"
            >
              About
              <span className="navigation__link-before">About</span>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              className="navigation__link"
              to="/experience"
            >
              Experience
              <span className="navigation__link-before">Experience</span>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              className="navigation__link"
              to="/portfolio"
            >
              Portfolio
              <span className="navigation__link-before">Portfolio</span>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              className="navigation__link"
              to="/contacts"
            >
              Contacts
              <span className="navigation__link-before">Contacts</span>
            </NavLink>
          </li>
        </ul>
        <SocialLinksMenu/>
      </nav>
    </motion.div>

  );
};

export default Navbar;
