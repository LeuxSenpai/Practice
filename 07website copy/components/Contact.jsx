import React from 'react'
import './Contact.css'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import location_icon from '../assets/location-icon.png'
import phone_icon from '../assets/phone-icon.png'
import white_arrow from '../assets/white-arrow.png'

const Contact = () => {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "826248c9-5c8e-43c3-8d4a-4791f2bde952");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt=''/></h3>
        <p>nigga nigga nigga nigga nigga nigga nigga nigga <br/>
        nigga nigga nigga nigga nigga nigga nigga nigga<br/>
        nigga nigga nigga nigga nigga nigga nigga nigga</p>
        <ul>
          <li><img src={mail_icon} alt=''/>niggatron@gmail.com</li>
          <li><img src={phone_icon} alt=''/>+903727724749</li>
          <li><img src={location_icon} alt=''/>srinagar mubaraka goon lane-56 77 house<br/>nanaland-500000098</li>
        </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Your name' required/>
            <label>Your Phone Number</label>
            <input type='tel' name='name' placeholder='Your number' required/>
            <label>Write your Message</label>
            <textarea name='message' id='' placeholder='Enter your Message' rows='10' required></textarea>
            <button type='submit' className='btn dark-btn'>submit<img src={white_arrow} alt='' /></button>
          </form>
          <span>{result}</span>
        </div>
      
      
    </div>
  )
}

export default Contact
