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
          <Title className="contacts__title">Contacts</Title>
          <ContactForm/>
        </div>
        <div className="contacts__map">
          <ul className="contacts__info">
            <li className="contacts__item">
              <a href="mailto:yauhen.parhimovich@gmail.com" className="contacts__item-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 448 448">
                  <path d="M448 177.5v198.5c0 22-18 40-40 40h-368c-22 0-40-18-40-40v-198.5c7.5 8.25 16 15.5 25.25 21.75 41.5 28.25 83.5 56.5 124.25 86.25 21 15.5 47 34.5 74.25 34.5h0.5c27.25 0 53.25-19 74.25-34.5 40.75-29.5 82.75-58 124.5-86.25 9-6.25 17.5-13.5 25-21.75zM448 104c0 28-20.75 53.25-42.75 68.5-39 27-78.25 54-117 81.25-16.25 11.25-43.75 34.25-64 34.25h-0.5c-20.25 0-47.75-23-64-34.25-38.75-27.25-78-54.25-116.75-81.25-17.75-12-43-40.25-43-63 0-24.5 13.25-45.5 40-45.5h368c21.75 0 40 18 40 40z"></path>
                </svg>
              </a>
              <a href="mailto:yauhen.parhimovich@gmail.com" className="contacts__item-text">yauhen.parhimovich@gmail.com</a>
            </li>
            <li className="contacts__item">
              <a href="tel:+375297276275" className="contacts__item-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 512 512">
                  <path d="M352 320c-32 32-32 64-64 64s-64-32-96-64-64-64-64-96 32-32 64-64-64-128-96-128-96 96-96 96c0 64 65.75 193.75 128 256s192 128 256 128c0 0 96-64 96-96s-96-128-128-96z"></path>
                </svg>
              </a>
              <a href="tel:+375297276275" className="contacts__item-text">
               +375 (29) 727-62-75
              </a>
            </li>
            <li className="contacts__item">
              <a href="https://t.me/Yauhen_Parhimovich" className="contacts__item-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 449 448">
                  <path d="M441 2.75c5.25 3.75 7.75 9.75 6.75 16l-64 384c-0.75 4.75-3.75 8.75-8 11.25-2.25 1.25-5 2-7.75 2-2 0-4-0.5-6-1.25l-113.25-46.25-60.5 73.75c-3 3.75-7.5 5.75-12.25 5.75-1.75 0-3.75-0.25-5.5-1-6.25-2.25-10.5-8.25-10.5-15v-87.25l216-264.75-267.25 231.25-98.75-40.5c-5.75-2.25-9.5-7.5-10-13.75-0.25-6 2.75-11.75 8-14.75l416-240c2.5-1.5 5.25-2.25 8-2.25 3.25 0 6.5 1 9 2.75z"></path>
                </svg>
              </a>
              <a href="https://t.me/Yauhen_Parhimovich" className="contacts__item-text">
                @Yauhen_Parhimovich</a>
            </li>
          </ul>
          <Map/>
        </div>
      </div>
    </section>

  );
};

export default Layout(Contacts);
