
import { Image } from 'react-bootstrap'
import new_profile from '../../assets/new_profile_pic.jpeg'
import React, { Fragment } from 'react';
import './header.css'

const Header = () => (
        <Fragment>
                <div className="header-style">
                        <Image className="profile" src={new_profile} roundedCircle />
                        <div>
                                <h1 tabindex ="1">Talita Barbosa</h1>
                                <h2 tabindex ="2">Software Engineer</h2>
                        </div>
                </div>
        </Fragment>
)

export default Header