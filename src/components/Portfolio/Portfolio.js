import {useEffect, useRef, useState} from 'react';
import {motion, useAnimation, useInView} from 'framer-motion';

import PortfolioItem from './PortfolioItem/PortfolioItem';

import './Portfolio.scss';
import {images as data} from '../../data/gallery';

const Portfolio = () => {

  const images = data.slice(0, 10)

  const [widthAndHeight, setWidth] = useState(0);

  useEffect(() => {
    const elementWidth = document.querySelector('.main-portfolio__list').clientWidth;
    const width = (elementWidth - 30) / 5;

    setWidth(width);
  }, []);

  const list = {
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      }
    }
  };

  const controls = useAnimation();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      console.log('yes');
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.ul
      className="main-portfolio__list"
      initial="hidden"
      animate="visible"
      variants={list}
      ref={ref}
    >
      {images.map((image, index) => {
        return (
          <PortfolioItem
            key={index}
            name={image.title}
            image={image.src}
            width={widthAndHeight}
          />
        )
      })}
    </motion.ul>
  );
};

export default Portfolio;
