import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Delete = ({ testID}) => {

    const utils = ["Delete"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <div className="icon">
            <FontAwesomeIcon icon={faTrash} style={{ fontSize: 20 }}/>
            </div>
        </div>
    )

}

Delete.propTypes = {
    testID: PropTypes.string
}

export default Delete