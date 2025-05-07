function Contact() {
  return (
    <div className="page contact">
      <h1>Contact Us</h1>
      <p>Email: info@sssoftsolutions.com</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Address: Kissimmee, Florida</p>
      <iframe
        title="SSSoft Solutions Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112531.05076356378!2d-81.4654936!3d28.3046819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd8043d6e3a3e9%3A0xb3a2ecb32b7d91b5!2sKissimmee%2C%20FL!5e0!3m2!1sen!2sus!4v1713962180981!5m2!1sen!2sus"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Contact;