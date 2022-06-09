import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import { json } from 'stream/consumers';
import './Header.scss';

const Header = () =>{


    return(
        <header>

<div className='container-fluid'>
          
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-1 px-4 shadow-sm">
        
            <a href="#">
                <img className="qodef-normal-logo d-none d-lg-block" src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/logo-light.png" alt="logo" height="90" />  
                <img className="qodef-normal-logo d-lg-none" src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/logo-mobile.png" alt="logo" height="90" />                     
            </a>
        
        <a href="#" className="navbar-brand font-weight-bold d-block d-lg-none">MegaMenu</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav justify-content-end">
           
            <li className="nav-item dropdown megamenu"><a id="megamneu" href="#"  data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold dropdown-toggle">Mega Menu</a>
                <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
                <div className="container">
                    <div className="row bg-white rounded-0 m-0 shadow-sm">
                    <div className="col-lg-7 col-xl-8">
                        <div className="p-4">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold">MegaMenu heading</h6>
                            <ul className="list-unstyled">
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0">Unique Features</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                            </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold">MegaMenu heading</h6>
                            <ul className="list-unstyled">
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Unique Features</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                            </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold">MegaMenu heading</h6>
                            <ul className="list-unstyled">
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Unique Features</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                            </ul>
                            </div>
                            <div className="col-lg-6 mb-4">
                            <h6 className="font-weight-bold">MegaMenu heading</h6>
                            <ul className="list-unstyled">
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Unique Features</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Image Responsive</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
                                <li className="nav-item"><a href="" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga"></div>
                    </div>
                </div>
                </div>
            </li>
            <li className="nav-item"><a href="" className="nav-link font-weight-bold">About</a></li>
            <li className="nav-item"><a href="" className="nav-link font-weight-bold">Services</a></li>
            <li className="nav-item"><a href="" className="nav-link font-weight-bold">Contact</a></li>
            </ul>
        </div>

        </nav>
        </div>           
        </header>
    )
}

export default Header;