import './Progressbar.scss';
import {useEffect, useRef} from 'react';
import {useAnimation, useInView} from 'framer-motion';
import {motion} from 'framer-motion';

const Progressbar = ({className, range}) => {

  const styleClassName = ['progressbar', 'progressbar-' + className]

  const squareVariants = {
    visible: { opacity: 1, width: `${range}%`, transition: { duration: 1 } },
    hidden: { opacity: 0, width: 0 }
  };
  const controls = useAnimation();
  const ref = useRef(null)
  const isView = useInView(ref);
  useEffect(() => {
    if (isView) {
      controls.start("visible");
    }
  }, [controls, isView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className={styleClassName.join(' ')}
    >
    </motion.div>
  )
};

export default Progressbar;
