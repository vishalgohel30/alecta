import React, {useState, useEffect} from 'react';
import { json } from 'stream/consumers';
// import './Header.scss';

const Footer = () =>{


    return(
        <footer className="bg-dark text-white py-5" id="about">  
    <div className="container p-4">           
      <div className="row">        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <div className="textwidget lh-base">
          <a href="#" target="_self" rel="noopener noreferrer"><img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/logo-white.png" alt="Widget Image" width="103" height="29" /></a>        
        <p className="py-3 h5 lh-base">Set up your footer quickly using the footer widget areas. With the option of 1-4 footer columns, you can be sure that all relevant information will look gorgeous in your footer.</p>        
        <h6 className="h5 lh-base">18 Northumberland Avenue, London<br/>
        (+44) 871.075.0336<br/>
        <a href="mailto:alecta@qodeinteractive.com" className="text-white">alecta@qodeinteractive.com</a></h6>
        </div>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className="secondary_title">Links</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="secondary_title">Twitter Feed</h5>
          <p>Couldn't connect with Twitter</p>          
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="secondary_title">Offices</h5>
          <p>Curabitur tincidunt quam ipsum, a dictum dui viverra ut. Donec at odio a justo vulpu.</p>
          <div>
            <img src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/footer-image.png" />
          </div>
        </div>        
      </div>  
  </div> 
  </footer>
    )
}

export default Footer;