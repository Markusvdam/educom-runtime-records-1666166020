import PropTypes from 'prop-types'

const ProductImage = ({ testID, imageURL}) => {

    const utils = ["ProductImage"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <img src={ imageURL } alt="Product Tile"/>
        </div>
    )
}

/*const imageURLS = [
    "https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg", 
    "https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3=w240-h480"
]*/

ProductImage.propTypes = {
    testID: PropTypes.string
}

export default ProductImage