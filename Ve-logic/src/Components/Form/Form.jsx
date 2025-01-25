import './Form.css';
import { useRef, useState } from 'react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm('service_rx2q2nd', 'template_qc78lbb', form.current, {
        publicKey: 'aQiJtmRCzePLbjh4x'})
        .then(() => {
          e.target.reset();
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setErrors({});
          setSuccessMessage('Tu mensaje ha sido enviado exitosamente, te contactaré pronto.');
        }, (error) => {
          console.error('Error al enviar el correo:', error);
        });
    }
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};
    if (!name) newErrors.name = 'Por favor no olvides tu nombre';
    if (!email) newErrors.email = 'Por favor indica tu email';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'El email no es válido';
    if (!message) newErrors.message = 'Es necesario tu mensaje';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact">
      <h5>Trabajemos juntos</h5>
      <h2 className="titulo-h2">Contáctanos</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>velogic2024@gmail.com</h5>
              <a href="mailto:velogic2024@gmail.com" target="_blank" rel="noopener noreferrer">Envía un mensaje</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
              <div className="contact__whatsapp">
                <div className="contact__whatsapp-item">
                  <a href="https://wa.me/+5492645207128" target="_blank" rel="noopener noreferrer">+54 9 2645 207-128</a>
                </div>
                <div className="contact__whatsapp-item">
                  <a href="https://wa.me/+5492235966905" target="_blank" rel="noopener noreferrer">+54 9 2235 966-905</a>
                </div>
              </div>
            
          </article>
          {/* <article className="contact__option">
            <TbBrandTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>Vane_Dev</h5>
            <a href="https://t.me/Vane_Dev" target="_blank" rel="noopener noreferrer">Escríbeme</a>
          </article> */}
        </div>
        {/* End of contact options*/}

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>
          <div className="form-control">
            <textarea
              name="message"
              rows="7"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <small className="error">{errors.message}</small>}
          </div>
          <button type="submit" className="send">Enviar</button>
          {successMessage && <p className="success">{successMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default Form;




