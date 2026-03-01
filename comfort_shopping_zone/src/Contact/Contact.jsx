import './Contact.css'
function Contact(){
    return(
        <>
        <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-text">
        Have questions? We'd love to hear from you!
      </p>

      <div className="contact-box">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </div>
    </div>
        </>
    )
}
export default Contact;