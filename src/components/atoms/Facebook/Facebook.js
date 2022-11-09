import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

const Facebook = ({ testID}) => {

    const utils = ["Facebook"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <FontAwesomeIcon icon={faSquareFacebook} style={{ fontSize: 22 }}/>
        </div>
    )

}

Facebook.propTypes = {
    testID: PropTypes.string
}

export default Facebook