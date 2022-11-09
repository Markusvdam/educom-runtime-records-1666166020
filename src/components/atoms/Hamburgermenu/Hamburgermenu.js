import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Hamburgermenu = ({ color, testID}) => {

    const utils = ["Hamburgermenu", color].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 50 }}/>
        </div>
    )
}

const color = [
    "black",
    "white"
]

Hamburgermenu.propTypes = {
    testID: PropTypes.string,
    color: PropTypes.oneOf(color)
}

export default Hamburgermenu