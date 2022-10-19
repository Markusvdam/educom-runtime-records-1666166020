import PropTypes from 'prop-types'
import logoBlack from '../../../resources/images/logo-black.svg'
import logoWhite from '../../../resources/images/logo-white.svg'

/// Default Props defined in Logo.defaultProps
const Logo = (props) => {

    const logo = props.exceptionType === "logo-white" ? logoWhite : logoBlack
   // const size = props.size ? props.size : "small"

    return(
        <div data-testid={ props.testID } 
             data-object-type={ props.exceptionType ?? ""}
             className={ "Logo" }>
            <img src={ logo } className={ props.size } alt="Logo" />
        </div>
  )
  
}

const sizes = [
    "small",
    "medium",
    "large"
]

const exceptionClasses = [
    "logo-black",
    "logo-white"
]

Logo.propTypes = {
    testID: PropTypes.string,
    exceptionType: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

Logo.defaultProps = {
    testID: `Logo-${ Math.floor(Date.now() / 1000) }`,
    exceptionType: 'logo-black',
    size: 'medium'
}

export default Logo