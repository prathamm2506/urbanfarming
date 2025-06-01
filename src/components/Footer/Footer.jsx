import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer'>
<div>
      <div className="ft-maindiv">
        <div className="ft-paddiv">
          <h2>Let's connect and collaborate!</h2>
          <div className="ft-links">
            <div className="ft-mails">
              <small>Email:</small>
              <p><a href="">info@squareroots.in</a></p>

              <small>Call us:</small>
              <p><a href="">+91 9136344051</a></p>
            </div>
            <div className="ft-add">
              <small>Visit us: Hashu Adwani Memorial Complex, Collector's Colony, Chembur, Mumbai, Maharashtra 400074</small>
              <p>Square Roots Private limited</p>
            </div>
            <div className="ft-lets">
              <small>Lets connect:</small>
              <p><a href="mailto:info@rhyno.in" >Drop a Message <i className="fas fa-chevron-right"></i></a></p>
            </div>
          </div>

          <small>Quick Links</small>
          <div className="ft-quick">
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Careers</li>
           <li>Rentals</li>
          </div>
          <p>Copyright &copy; 2024 Square Roots. All Rights Reserved.</p>
        </div>
  </div>
    </div>
  

</div>
  )
}

export default Footer