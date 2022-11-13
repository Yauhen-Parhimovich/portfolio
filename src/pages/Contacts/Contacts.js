import Layout from '../../HOC/Layout/Layout';
import Title from '../../components/Title/Title';

import './Contacts.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/Map/Map';

const Contacts = () => {

  return (
    <section className="contacts">
      <div className="contacts__content">
        <div className="contacts__form">
          <Title className='contacts__title'>Contacts</Title>
          <ContactForm/>
        </div>
        <div className="contacts__map">
          <div className="contacts__info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi cupiditate dolor doloremque est eum expedita explicabo iure iusto, laudantium modi nam nobis numquam quisquam, sequi sunt suscipit velit voluptatibus?
          </div>
          <Map/>
        </div>
      </div>
    </section>

  );
};

export default Layout(Contacts);
