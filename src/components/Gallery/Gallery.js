import './Gallery.scss';
import {images} from '../../data/gallery';
import {useEffect} from 'react';
import {ExplosionGallery} from './index';

const Gallery = () => {

  useEffect(() => {
    new ExplosionGallery(
      document.querySelector('.gallery')
    );
  }, []);


  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="galleryItem" key={index}>
          <a className="card"
             href={image.src}
             target="_blank"
             data-title={image.title}
             data-description={image.description}
          >
            <div className="cardContent">
              <h3 className="cardTitle">{image.title}</h3>
              <p className="cardDescription">{image.description}</p>
            </div>
            <div className="cardHover"></div>
            <img
              className="cardImage"
              src={image.src}
              alt="Spider plant"/>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
