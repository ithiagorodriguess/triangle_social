import { useState } from 'react';

import {BiGlobe,BiChat,BiSearchAlt2} from 'react-icons/bi';
import {FiMoreVertical} from 'react-icons/fi';

import LogoFull from './../../assets/logofull.svg'
import ImageProfile from './../../assets/imageProfile.jpg'

import './Header.css'

export default function Header(props) {


    return(
        <div className="Header--container">
            <div className="logo">
                <img src={LogoFull} alt="" srcset="" />        
          </div>
          <div className="search">
            <BiSearchAlt2 className='iconSearch'/>
            <input type="search" placeholder='Pesquisar...'/>
          </div>
          <div className="buttons">
            <BiGlobe className='icon'/>
            <div className="chatNotification">
                <BiChat className='icon'/>
                <div className="notification">
                    <span>{props.notification}</span>
                </div>
            </div>
            <img src={ImageProfile} alt=""/>
            <FiMoreVertical className='icon'/>
          </div>
        </div>
  )
}