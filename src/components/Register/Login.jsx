import React from 'react'

function LoginComp() {
  return (
    <>
    <div className="container">
        <div className="about">
            <h3 className='about__title'>Login</h3>
            <hr />
            <form action="#" className='form'>
                <div className="form__item">
                    <label htmlFor="email">Email Address</label>
                    <input className='form__item-inp' type="text" placeholder='name@example.com' id='email'/>
                </div>
                <div className="form__item">
                    <label htmlFor="password">Password</label>
                    <input className='form__item-inp' type="text" placeholder='Password' id='password'/>
                </div>
                <p className='linkReg'>New Here? <a href="/register">Register</a></p>
                <div className="form__btn">
                    <button type='submit' className='btn form__btn-button' disabled>Send</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default LoginComp