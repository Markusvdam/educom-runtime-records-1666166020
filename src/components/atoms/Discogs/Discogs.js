import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Discogs = ({ testID}) => {

    const utils = ["Discogs"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <FontAwesomeIcon icon={faMusic} style={{ fontSize: 22 }}/>
        </div>
    )

}

Discogs.propTypes = {
    testID: PropTypes.string
}

export default Discogs