import Layout from '../../HOC/Layout/Layout';
import Gallery from '../../components/Gallery/Gallery';

import './Portfolio.scss';
import {useEffect, useState} from 'react';
import GaleryMobile from '../../components/GaleryMobile/GaleryMobile';

const Portfolio = () => {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    const height = document.querySelector('.portfolio').clientHeight
    setWidth(width)
    setHeight(height)
  }, [])

  return (
    <section className="portfolio" style={{height: height}}>
      {
        width > 768
        ? <Gallery/>
        : <GaleryMobile/>
      }
    </section>

  );
};

export default Layout(Portfolio);
