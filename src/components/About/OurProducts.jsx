import React from 'react'
import { OurProduct } from '../../data/OurProduct'

function OurProducts() {
  return (
    <>
    <div className="container">
        <div className="about">
        <h3 className='about__title'>Our Products</h3>
        <div className="ourProducts">
            {OurProduct.map((item, id) => (
                <div className="ourProduct" key={id}>
                    <img className='ourProduct__image' src={item.image} alt={item.image} />
                    <p className="ourProduct__title">{item.title}</p>
                </div>
            ))}
        </div>
        </div>
    </div>
    </>
  )
}

export default OurProducts