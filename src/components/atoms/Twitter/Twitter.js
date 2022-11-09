import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Twitter = ({ testID}) => {

    const utils = ["Twitter"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 22 }}/>
        </div>
    )

}

Twitter.propTypes = {
    testID: PropTypes.string
}

export default Twitter