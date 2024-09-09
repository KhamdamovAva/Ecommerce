import React from 'react'
import "./style.scss"

function Contacts() {
  return (
    <>
    <div className="container">
        <div className="about">
            <h3 className='about__title'>Contact Us</h3>
            <hr />
            <form action="#" className='form'>
                <div className="form__item">
                    <label htmlFor="name">Name</label>
                    <input className='form__item-inp' type="text" placeholder='Enter your name' id='name'/>
                </div>
                <div className="form__item">
                    <label htmlFor="email">Email</label>
                    <input className='form__item-inp' type="text" placeholder='name@example.com' id='email'/>
                </div>
                <div className="form__item">
                    <label htmlFor="area">Email</label>
                    <textarea className='form__item-area form__item-inp' type="text" placeholder='Enter your message' id='area'/>
                </div>
                <div className="form__btn">
                    <button type='submit' className='btn form__btn-button' disabled>Send</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contacts