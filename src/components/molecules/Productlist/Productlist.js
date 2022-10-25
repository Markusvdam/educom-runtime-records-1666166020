import { useState, useEffect } from 'react'
import PropTypes, { array } from 'prop-types'

/// TODO: Define props
const Productlist = ({ testID, productData}) => {

    const utils = ["Productlist"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <ul class="products">
                {productData.map((item, i) => {     
                    return (<li class="product">{item}</li>); 
                 })}
            </ul>
        </div>
    )

}

const data = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
]

Productlist.propTypes = {
    testID: PropTypes.string,
    productData: PropTypes.oneOf(data)
}

export default Productlist