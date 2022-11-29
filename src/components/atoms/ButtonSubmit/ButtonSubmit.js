import PropTypes from 'prop-types'

const ButtonSubmit = ({ text,
    exceptionType = "",
    additionalClasses, testID}) => {

    const utils = ["ButtonSubmit", ...additionalClasses || []].join(" ")
    const exType = exceptionType ?? ""

    return(
        <div data-testid={ testID } data-type={exType} className={ utils }>
            <input type="submit" value={text}/>
        </div>
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

ButtonSubmit.propTypes = {
    testID: PropTypes.string,
    exceptionType: PropTypes.oneOf(exceptionClasses),
    utilityClasses: PropTypes.arrayOf(PropTypes.oneOf(utilityClasses)),
}

export default ButtonSubmit