import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='discription'>
        <div className='logo'>
              QPICK
        </div>
        <div className='nameCard'>
            Наушники
        </div>
      </div>
      <div className='containerBtn'>
            <button> <img src="like.svg"></img></button>
            <Link to='/basket'>
              <button className='corzina'> <img src="corzina.svg"></img></button>
            </Link>
            
        </div>
    </div>
  )
}

export default Header