import PropTypes from 'prop-types'
import disc from './../../../resources/images/half-disc.png'

const HalfDisc = ({ testID}) => {

    const utils = ["HalfDisc"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <img src={disc} alt="Half disc"/>
        </div>
    )

}

HalfDisc.propTypes = {
    testID: PropTypes.string
}

export default HalfDisc