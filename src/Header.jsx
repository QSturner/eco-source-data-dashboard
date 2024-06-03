import React from 'react'
import { 
    BsPersonCircle, 
} from 'react-icons/bs'

function Header() {
  return (
    <header className='header'>
        <div className='header-left'>
            <img src="https://ecoclosure.org/wp-content/uploads/2023/07/EcoClosure-Logo-Dark.png" alt="EcoSource Logo" className='logo' />
        </div>
        <div className='header-right'>
            <a href='https://github.com/QSturner'>
                <BsPersonCircle className='icon' /> 
            </a>
        </div>
    </header>
  )
}

export default Header