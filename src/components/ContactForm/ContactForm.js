import Input from '../Input/Input';
import Button from '../Button/Button';

import './ContactForm.scss';

const ContactForm = () => {
  return (
    <div className="contacts-form__box">
      <form className="contacts-form">
        <h2 className="contacts-form__title">Contact me</h2>
        <Input
          name="Name"
          variant="input"
          type="text"
        />
        <Input
          name="Email"
          variant="input"
          type="text"
        />
        <Input
          name="Subject"
          variant="input"
          type="text"
        />
        <Input
          name="Message"
          variant="textarea"
        />
        <Button className="contacts-form__button">Send message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
