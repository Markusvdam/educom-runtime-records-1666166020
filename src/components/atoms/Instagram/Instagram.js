import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Instagram = ({ testID}) => {

    const utils = ["Instagram"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 22 }}/>
        </div>
    )

}

Instagram.propTypes = {
    testID: PropTypes.string
}

export default Instagram