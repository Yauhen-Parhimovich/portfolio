import {useRef} from 'react';
import {motion, useCycle} from 'framer-motion';

import BurgerButton from './BurgerButton/BurgerButton';
import {useDimensions} from '../../hooks/useDimensions';
import BurgerNavigation from './BurgerNavigation/BurgerNavigation';

import './BurgerMenu.scss';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200 - 5}px at 220px 55px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 220px 55px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};


const BurgerMenu = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const {height} = useDimensions(containerRef);


  return (
    <motion.nav
      className="burger-menu"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar}/>
      <BurgerNavigation/>
      <BurgerButton toggle={() => toggleOpen()}/>
    </motion.nav>
  );
};

export default BurgerMenu;
