import React from 'react'

export default function About() {
  return (<div>
      <div class="main_about">
        <div class="main_content_about">
            <h2>What We Do?</h2>
        </div>
    </div>

  
    <div class="product product_about">
        <h2>HOW WE HELP</h2>
        <h3>Pure Food & Water</h3><br/>
                    <p>We supply needy childen with basic necessities like pure food and water</p>
                    <br></br><br/>
                    <h3>Health and Medicine</h3><br/>
                    <p>Health being the foremost priority, we aim at giving children every medical support</p>
                    <br></br>
                    <h3>Education</h3><br/>
                    <p>We provide education facilities to children all over the world</p>
                    <br></br>
           
    <footer>
        <div class="pages"> 
            <a href="index.html"><img class="aimg" src={require("./logo.png")} width="250"/></a> 
            <p>Donating food ensures that no one goes hungry, while clothing contributions provide warmth and dignity. Monetary support enables organizations to extend their reach and provide essential services, fostering a more equitable society.</p>
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
            <p>Help us shape a better future fot children all over the world</p>
            <div class="side_btn">
                <a href="donate.html">JOIN US TODAY</a>
            </div>
        </div>
       
    </footer>

    </div>
    </div>
  )
}
