import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
  return (
    <div>
      
      <div class="main">
        <div class="main_content">
            <h2>"The meaning of life is to find your gift. The purpose of life is to give it away."
                <br/>
                <span>The smallest act of kindness is worth more than the grandest intention!</span>
            </h2>

        </div>
    </div>
   
    <div class="side">
        <div class="left">
            <img src="https://www.unicef.org/croatia/sites/unicef.org.croatia/files/styles/hero_mobile/public/UN043177_1.jpg.webp?itok=kfjqdmtP"/>
        </div>
        <div class="right">
            <h2>HELP TODAY</h2>
            <p>
                "The measure of a life, after all, is not its duration, but its donation." 
            </p>
            <div class="side_btn">
                <a href="donate.html">JOIN US TODAY</a>
            </div>
        </div>

    </div>
   

    <div class="product">
        <h2>HOW WE HELP</h2>
        <div class="product_container">

            <div class="item">
      <br></br>
                <div class="item_content">
                    <h3>Pure Food & Water</h3><br/>
                    <p>"Food offering sustenance and hope to those in need."</p>
                    <br></br><br/>
                </div>
            </div>

            <div class="item">
            <br></br>
                <div class="item_content">
                    <h3>Cloth</h3><br/>
                    <p>"Clothing donations provide warmth and dignity."
                    </p>
                    <br></br>
                </div>
            </div>

            <div class="item">
                <br></br>
                <div class="item_content">
                    <h3>Education</h3><br/>
                    <p>"Money donations empower education's reach."</p>
                    <br></br>
                </div>
            </div>
        </div>
    </div>

    <hr/>

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
  )
}
