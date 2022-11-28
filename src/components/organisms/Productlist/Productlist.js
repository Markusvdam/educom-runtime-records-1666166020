import PropTypes, { array } from 'prop-types'
import ProductCard from './../ProductCard'
import { Link } from "react-router-dom";

const Productlist = ({ testID, productData}) => {

    const utils = ["Productlist"].join(" ")
    

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="ProductlistContainer">
                <ul className="products">
                    {productData.map((item, i) => {   
                        const productID = item.data.id
                        const itemData = item.data
                        return (
                            <li key={item.data.id} className="product"><ProductCard productInfo={itemData} /></li>
                        ); 
                    })}
                </ul>
            </div>
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