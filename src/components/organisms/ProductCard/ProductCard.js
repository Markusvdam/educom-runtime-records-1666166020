import PropTypes from 'prop-types'
import Label from './../../atoms/Label'
import ButtonAdd from '../../atoms/ButtonAdd'
import { useContext } from 'react'
import { CartContext } from '../../../hooks/CartContext'
import { Link } from "react-router-dom";

const ProductCard = ({ testID, productInfo}) => {

    const utils = ["ProductCard"].join(" ")
    const textButtonAdd = "Add"
    const { addItem } = useContext(CartContext)

    return(
        <div data-testid={ testID } className={ utils }>
            <Link to={"../productpage/?product="+productInfo.id}><Label text={productInfo.price} exceptionType='price'/></Link>
            <Link to={"../productpage/?product="+productInfo.id}>
                <div className='ProductCardImage'>
                <img src={ productInfo.imageURL } />
                </div>
            </Link>
            <div className='ProductCardContent'>
                <Label text={productInfo.genre} exceptionType='genre'/>
                <Link to={"../productpage/?product="+productInfo.id}><div className='ProductCardTitle'>{productInfo.title}</div></Link>
                <div className='ProductCardBottom'>
                <Link to={"../productpage/?product="+productInfo.id}><div className='ProductCardArtist'>{productInfo.artist}</div></Link>
                    <div className='ProductCardAdd' onClick={() =>addItem(productInfo.id)}><ButtonAdd text={textButtonAdd}/></div>
                </div>

                {/* TODO remove spacer later on, solve with spacing*/}
                <Link to={"../productpage/?product="+productInfo.id}><div className='spacer'></div></Link>
            </div>
        </div>
    )

}

/*
const info = [
]*/

ProductCard.propTypes = {
    testID: PropTypes.string
}

export default ProductCard