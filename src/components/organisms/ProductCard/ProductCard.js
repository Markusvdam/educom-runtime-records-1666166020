import PropTypes from 'prop-types'
import Label from './../../atoms/Label'
import ButtonAdd from '../../atoms/ButtonAdd'


const ProductCard = ({ testID, productInfo}) => {

    const utils = ["ProductCard"].join(" ")
    const textButtonAdd = "Add"

    return(
        <div data-testid={ testID } className={ utils }>
            <Label text={productInfo.price} exceptionType='price'/>
            <div className='ProductCardImage'>
                <img src={ productInfo.imageURL } />
            </div>
            <div className='ProductCardContent'>
                <Label text={productInfo.genre} exceptionType='genre'/>
                <div className='ProductCardTitle'>{productInfo.title}</div>
                <div className='ProductCardBottom'>
                    <div className='ProductCardArtist'>{productInfo.artist}</div>
                    <div className='ProductCardAdd'><ButtonAdd text={textButtonAdd}/></div>
                </div>

                {/* TODO remove spacer later on, solve with spacing*/}
                <div className='spacer'></div>
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