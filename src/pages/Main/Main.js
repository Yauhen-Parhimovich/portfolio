import Layout from '../../HOC/Layout/Layout';

import './Main.scss';
import AnimateBackground from '../../components/AnimateBackground/AnimateBackground';
import Title from '../../components/Title/Title';

const Main = () => {


  return (
    <>
      <div className="main">
        <section className="main-section">
          <AnimateBackground/>
          <div className="main-section__wrapper">
            <h2>Hi!</h2>
            <p>i'm Yauhen Parkhimovich</p>
            <p>Frontend developer</p>
            <p>You are welcome on my site!</p>
          </div>

        </section>
        <section className="main-section">
          <Title className="main-section__title">About</Title>
          <div className="main-section__content"></div>
        </section>
        <section className="main-section">
          <Title className="main-section__title">Experience and skills</Title>
          <div className="main-section__content"></div>

        </section>
        <section className="main-section">
          <Title className="main-section__title">Contacts me</Title>
          <div className="main-section__content"></div>

        </section>
      </div>
    </>
  );
};

export default Layout(Main);
