import React from 'react'

export default function Contact() {
  return (
    <div>
      <div class="contact_container">
       <h1>CONTACT US</h1>
        <div class="map">
            <a href="index.html"><img src={require("./map.png")} alt='IMG' width="1500"/></a>
        </div>
        <div class="contact_content">
            <p>We want to hear from you! Drop us a note and someone from our team will get back to you.
                Looking to volunteer or supporting us in any other ways? Call +91 12345677889
                Have a question that involves Divine Sevva? Please head on over to our Locations page to reach our locations.</p>
            <p><b>Call:+910000000000 </b></p>
            <p><b>Mail: divinesevva@gmail.com</b></p>
        </div>
    </div>

    <footer>
        <div class="pages">
            <a href="index.html"><img class="aimg" src={require("./logo.png")} alt='img' width="250"/></a>
            <p>Divine sevva cares for needy children by empowering their caregivers to do their best work, with compassion, grace, integrity and excellence. Our end goal is to support children worldwide and see every child reach the potential that God has for them.</p>
            <a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
        <div class="doc">
            <h3>Navigation</h3>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="donate.html">Donate</a>
            <a href="contact.html">Contact</a>
        </div>
        <div class="contact">
            <h3>Contact Us</h3>
            <a href="contact" target="_blank">246/1 Abc nagar,Chennai</a>
            <a href="Phone: +910000000000">+910000000000</a>
            <a href="mailto: ppppppp@gmail.com">divinesevva@gmail.com</a>
        </div>
        <div class="social">
            <h3>Support</h3>
            <p>Help us shape a better future for children all over the world</p>
            <div class="side_btn">
                <a href="donate.html">JOIN US TODAY</a>
            </div>
        </div>
       
    </footer>
    </div>
  )
}
