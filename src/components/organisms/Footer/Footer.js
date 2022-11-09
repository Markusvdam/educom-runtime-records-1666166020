import PropTypes from 'prop-types'
import recordstoreday from './../../../resources/images/record-store-day.png';
import Logo from './../../atoms/Logo'
import Mail from './../../atoms/Mail'
import Discogs from './../../atoms/Discogs'
import Facebook from './../../atoms/Facebook'
import Twitter from './../../atoms/Twitter'
import Instagram from './../../atoms/Instagram'

const Footer = ({ testID }) => {

    const utils = ["Footer", "bg-base", "fg-base-light-50"].join(" ")

    return(
        <div data-testid={ testID } className={ utils }>
                <div className="FooterItem">
                    <Logo size="medium" exceptionType="logo-white"/>
                    <ul>
                        <li key="mail"><Mail/>info@runtime-records.com</li>
                        <li key="discogs"><Discogs />Discogs</li>
                        <li key="facebook"><Facebook />Facebook</li>
                        <li key="twitter"><Twitter />Twitter</li>
                        <li key="instagram"><Instagram />Instagram</li>
                    </ul>
                </div>
                <div className="FooterItem">
                    <h1 className="fg-white">Info</h1>
                    <p>About us</p>
                    <p>Privacy policy</p>
                    <p>Shipping</p>
                </div>
                <div className="FooterItem">
                    <h1 className="fg-white">Adres</h1>
                    <p>Van der Takstraat 56</p>
                    <p>3071 LM Rotterdam</p>
                    <p>Netherlands</p>
                </div>
                <div className="FooterItem"><div className="FooterItemImg"><img src={recordstoreday} alt="Record Store Day Logo" /></div></div>
        </div>
    )
}

/*const info = []*/

Footer.propTypes = {
    testID: PropTypes.string
}

export default Footer