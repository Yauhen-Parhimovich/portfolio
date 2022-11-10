import Layout from '../../HOC/Layout/Layout';
import Title from '../../components/Title/Title';

import './Experience.scss';

const Experience = () => {

  return (
    <section className="experience">
      <Title>Experience</Title>
      <div className="experience__content">
        <div className="experience__text">
          Text
        </div>
        <div className="experience__date">
          Date
        </div>
      </div>
    </section>

  );
};

export default Layout(Experience);
