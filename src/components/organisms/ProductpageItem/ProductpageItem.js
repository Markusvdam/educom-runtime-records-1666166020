import PropTypes from 'prop-types'
import Label from './../../atoms/Label'
import ButtonAdd from './../../atoms/ButtonAdd'
import { CartContext } from '../../../context/CartContext'
import { useContext } from 'react'

/// TODO: Define props
const ProductpageItem = ({ testID, productInfo}) => {

    const utils = ["ProductpageItem"].join(" ")
    const textButtonAdd = "Add"
    const { addItem } = useContext(CartContext)

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="ProductpageItemContainer">
                <Label text={productInfo.price} exceptionType='price'/>
                <div className="ProductpageItemLeft">
                    <img src={productInfo.imageURL} alt="Product picture" />
                </div>

                <div className="ProductpageItemRight">
                    <div>
                        <h1>{productInfo.title}</h1>
                        <h3 className="fg-base-light-50">{productInfo.artist}</h3>
                        <Label exceptionType='genre' text={productInfo.genre}/>
                        <p className="text fg-base-light-50">{productInfo.description}</p>
                        <div className="ProductpageItemRightBottom">
                            <div>

                            </div>
                            <div className="ProductCardAdd">
                                <div className="b" onClick={() =>addItem(productInfo.id)}><ButtonAdd text={textButtonAdd}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductpageItem.propTypes = {
    testID: PropTypes.string
}

export default ProductpageItem