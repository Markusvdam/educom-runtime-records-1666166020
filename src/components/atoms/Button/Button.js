import PropTypes from 'prop-types'

const Button = ({ text,
    exceptionType = "",
    additionalClasses, testID}) => {

    const utils = ["Button", ...additionalClasses || []].join(" ")
    const exType = exceptionType ?? ""

    return(
        <button data-testid={ testID }
             data-type={exType}
             className={ utils }>
        { text }
        </button>
    )

}

/// TODO: Adjust!
const utilityClasses = [
    "x",
    "y"
]

/// TODO: Adjust
const exceptionClasses = [
    "x",
    "y"
]

    Button.propTypes = {
    testID: PropTypes.string,
    exceptionType: PropTypes.oneOf(exceptionClasses),
    utilityClasses: PropTypes.arrayOf(PropTypes.oneOf(utilityClasses)),
}

export default Button