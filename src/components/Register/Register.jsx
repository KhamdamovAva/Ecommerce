import React from 'react'

function RegisterComp() {
  return (
    <>
    <div className="container">
        <div className="about">
            <h3 className='about__title'>Register</h3>
            <hr />
            <form action="#" className='form'>
                <div className="form__item">
                    <label htmlFor="name">Full Name</label>
                    <input className='form__item-inp' type="text" placeholder='Enter Your Name' id='name'/>
                </div>
                <div className="form__item">
                    <label htmlFor="email">Email Address</label>
                    <input className='form__item-inp' type="text" placeholder='name@example.com' id='email'/>
                </div>
                <div className="form__item">
                    <label htmlFor="name">Password</label>
                    <input className='form__item-inp' type="text" placeholder='Password' id='email'/>
                </div>
                <p className='linkReg'>New Here? <a href="/login">Login</a></p>
                <div className="form__btn">
                    <button type='submit' className='btn form__btn-button' disabled>Send</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default RegisterComp