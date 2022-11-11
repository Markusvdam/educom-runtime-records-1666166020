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

const info = [
    {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Dickfehler Studio Treffen Nr. 1", artist: "Kombynat Robotron", price: "22.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "},
    {imageURL: "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", title: "Another Shape of Psychedelic Mu…", artist: "Mythic Sunship", price: "29.50", genre: "post punk, indie, punk", description: "This blistering punk-rock debut from a 55-year-old veteran of the scene delivers urgent music for evergreen unease. These are weary, angry songs, crafted with an insatiable verve and an almost triumphant fury. "}
]

ProductpageItem.propTypes = {
    testID: PropTypes.string,
    productInfo: PropTypes.oneOf(info)
}

export default ProductpageItem