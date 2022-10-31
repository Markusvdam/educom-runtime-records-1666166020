import { useState, useEffect } from 'react'
import PropTypes, { array } from 'prop-types'
import ProductCard from './../ProductCard'

const Productlist = ({ testID, productData}) => {

    const utils = ["Productlist"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <ul className="products">
                {productData.map((item, i) => {     
                    return (
                        <li key={i} className="product"><ProductCard productInfo={item.data} /></li>
                    ); 
                 })}
            </ul>
        </div>
    )

}

/*
const data = [
]*/

Productlist.propTypes = {
    testID: PropTypes.string
}

export default Productlist