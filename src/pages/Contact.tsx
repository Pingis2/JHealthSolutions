import contactImage from "../assets/images/contact/contact-image.png";

export const Contact = () => {
  return (
    <div className="contact-page">
      <img
        className="background-image"
        src={contactImage}
        alt="image of berlin"
      />
      <div className="text-container">
        <h1>Kontakt</h1>
        <h2>Bitte senden Sie uns Ihre Nachricht an</h2>
        <p>jhealthsolutions.hd@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
