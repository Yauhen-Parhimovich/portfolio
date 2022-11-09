import {motion} from 'framer-motion';

import './Transition.scss';

const Transition = () => {
  return (
    <motion.section
      className="transition"
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.6
        }
      }}
    >
      <div className="container">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
        <p className="loading">Loading...</p>
      </div>
    </motion.section>
  );
};

export default Transition;
