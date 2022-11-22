import './Title.scss';
import {useAnimation, useInView} from 'framer-motion';
import {useEffect, useRef} from 'react';
import {motion} from 'framer-motion';

const Title = ({className, children}) => {

  const style = [className, 'title__box'];

  const squareVariants = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, translateY: -20 }
  };

  const controls = useAnimation();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={style.join(' ')}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      <div className="title__top-layer"></div>
      <h2 className="title">
        {children}
      </h2>
    </motion.div>
  );
};

export default Title;
