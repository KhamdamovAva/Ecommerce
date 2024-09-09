import React from 'react'
import "./style.scss"

function Header() {
  return (
    <>
    <header className='headerImg'>
      <div className="container">
        <div className="header">
            <p className='header__title'>New Season Arrivals</p>
            <p className='header__descr'>
              This is a wider card with supporting text below as a natural
							lead-in to additional content. This content is a little bit
							longer.
            </p>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header