import PropTypes from 'prop-types'
import Label from '../../atoms/Label'
import Inputfield from '../../atoms/Inputfield/Inputfield'
import ButtonSubmit from '../../atoms/ButtonSubmit'
import { useState, useContext } from 'react'
import { setOrder } from "../../../hooks/useDatabase"
import { CartContext } from '../../../context/CartContext'

const Checkoutform = (props) => {

    const utils = ["Checkoutform"].join(" ")

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const { cartData } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const current = new Date();
        const orderID = `${current.getDate()}${current.getMonth()+1}${current.getFullYear()}${current.getHours()}${current.getMinutes()}${current.getSeconds()}${current.getMilliseconds()}`
        const orderDetails = JSON.stringify(cartData)
        setOrder(orderID, fullName, email, address, city, zip, orderDetails)
        alert("Order placed!");
        setFullName('')
        setEmail('')
        setAddress('')
        setCity('')
        setZip('')
    }

    return(
        <div data-testid={ props.testID } className={ utils }>
            <form onSubmit={handleSubmit}>
                <div className='row'><Label text='Full Name: '/><Inputfield type='text' name='Name' value={fullName} onChange={(e) => setFullName(e.target.value)} /></div>
                <div className='row'><Label text='Email: '/><Inputfield type='email' name='Email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                <div className='row'><Label text='Address: '/><Inputfield type='text' name='Address' value={address} onChange={(e) => setAddress(e.target.value)} /></div>
                <div className='row'><Label text='City: '/><Inputfield type='text' name='City' value={city} onChange={(e) => setCity(e.target.value)} /></div>
                <div className='row'><Label text='Zip: '/><Inputfield type='text' name='Zip' value={zip} onChange={(e) => setZip(e.target.value)} /></div>
                <div className='placeOrder'><ButtonSubmit text="Place order" /></div>
            </form>
        </div>
    )

}

Checkoutform.propTypes = {
    testID: PropTypes.string
}

export default Checkoutform