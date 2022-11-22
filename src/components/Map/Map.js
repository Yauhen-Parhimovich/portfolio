import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import {renderToStaticMarkup} from 'react-dom/server';
import {divIcon} from 'leaflet/src/layer';
import {motion} from 'framer-motion';

import './Map.scss';
import {useEffect, useState} from 'react';

const Map = () => {

  const animationVariants = {
    hidden: {
      translateY: -1000,
      transition: {}
    },
    visible: {
      translateY: [-1000, 20, -20, 10, -10, 5, -5, 0],
      transition: {
        times: [0, 0.15, 0.25, 0.45, 0.55, 0.75, 0.85, 1],
        duration: 4,
        delay: 3.5
      }
    }
  };

  const noAnimation = {
    hidden: {},
    visible: {}
  }

  const iconMarkup = renderToStaticMarkup(
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="35" height="58" viewBox="0 0 256 448" fill={'red'}>
      <path
        d="M192 160c0-35.25-28.75-64-64-64s-64 28.75-64 64 28.75 64 64 64 64-28.75 64-64zM256 160c0 15.25-1.75 31-8.25 44.75l-91 193.5c-5.25 11-16.75 17.75-28.75 17.75s-23.5-6.75-28.5-17.75l-91.25-193.5c-6.5-13.75-8.25-29.5-8.25-44.75 0-70.75 57.25-128 128-128s128 57.25 128 128z"></path>
    </svg>
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup
  });

  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <motion.div
      className="map"
      initial="hidden"
      animate="visible"
      variants={width > 992 ? animationVariants : noAnimation}
    >
      <div className="map__wrapper">

        <MapContainer
          center={[54.10485272254978, 28.334259535375054]}
          zoom={7}
          style={{height: '100%', width: '100%'}}
        >
          <Marker
            icon={customMarkerIcon}
            position={[54.10485272254978, 28.334259535375054]}
          />
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
        </MapContainer>
      </div>

    </motion.div>
  );
};

export default Map;
