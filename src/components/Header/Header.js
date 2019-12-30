 
 import React from 'react';
import {Image} from 'react-bootstrap'
import Talita from '../../assets/Talita.jpg'
import './header.css'

const Header = () => (
   
            <div className="header-style">
                    <Image className="profile"src={Talita} roundedCircle />
                    <h1>Talita Barbosa</h1>
                    <i className=" code-icon fas fa-code"></i>
                    <h2>Desenvolvedora Front-end</h2>

            </div>

)

export default Header