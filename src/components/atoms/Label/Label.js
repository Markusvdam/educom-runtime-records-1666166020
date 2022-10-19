import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Label = ({ text,
                 exceptionType = "",
                 additionalClasses, testID}) => {
  
  const utils = ["Label", ...additionalClasses || []].join(" ")
  const exType = exceptionType ?? ""

  return(
        <span data-testid={ testID } data-object-type={exType}
              className={ utils }>
            { text }
        </span>
  )
  
}


const utilityClasses = [
    "red",
    "blue"
]

const exceptionClasses = [
    "button",
    "regular"
]

Label.propTypes = {
    text: PropTypes.string.isRequired,
    exceptionType: PropTypes.oneOf(exceptionClasses),
    testID: PropTypes.string,
    additionalClasses: PropTypes.arrayOf(PropTypes.oneOf(utilityClasses)),
}

export default Label