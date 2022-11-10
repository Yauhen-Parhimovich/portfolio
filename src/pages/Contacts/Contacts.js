import Layout from '../../HOC/Layout/Layout';
import Title from '../../components/Title/Title';

import './Contacts.scss';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/Map/Map';

const Contacts = () => {

  return (
    <section className="contacts">
      <Title className='contacts__title'>Contacts</Title>
      <div className="contacts__content">
        <div className="contacts__form">
          <ContactForm/>
        </div>
        <div className="contacts__map">
          <Map/>
        </div>
      </div>
    </section>

  );
};

export default Layout(Contacts);
