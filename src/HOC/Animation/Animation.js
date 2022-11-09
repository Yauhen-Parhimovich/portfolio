import {motion, useIsPresent} from 'framer-motion';

import Transition from '../../pages/Transition/Transition';

import './Animation.scss';


const WithAnimation = ({children}) => {

  const isPresent = useIsPresent();

  let initialWidth = parseInt(window.getComputedStyle(document.body).width);

  const animateConfig = {
    initial: {x: -initialWidth},
    animate: {
      x: [null, 0, 0, initialWidth + 1000],
      transition: {
        duration: 4,
        times: [0, 0.1, 0.9, 1]
      }
    }
  };

  return (
    <>
      <motion.div
        id="motion-wrapper"
        initial={{x: '-100%'}}
        animate={{
          x: 0,
          transition: {
            delay: 1,
            type: 'just'
          }
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="privacy-screen"
        {...animateConfig}
        style={{originX: isPresent ? 0 : 1}}
      >
        <Transition/>
      </motion.div>
    </>
  );
};

export default WithAnimation;
