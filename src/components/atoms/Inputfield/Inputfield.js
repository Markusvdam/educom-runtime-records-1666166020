import PropTypes from 'prop-types'

const Inputfield = ({ testID, type, name, value, onChange}) => {

    const utils = ["Inputfield"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
            <input type={type} name={name} value={value} onChange={onChange} required />
        </div>
    )

}

Inputfield.propTypes = {
    testID: PropTypes.string
}

export default Inputfield