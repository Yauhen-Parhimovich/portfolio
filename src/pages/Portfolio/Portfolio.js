import Layout from '../../HOC/Layout/Layout';

import './Portfolio.scss';
import Gallery from '../../components/Gallery/Gallery';

const Portfolio = () => {


  return (
    <section className="portfolio">
      <Gallery
      />
    </section>

  );
};

export default Layout(Portfolio);
