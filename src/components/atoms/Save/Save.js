import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useProductList } from "./../../../context/ProductListContext"
import { useState } from 'react'

const Save = ({ testID, productData }) => {

    const [listData, setListData] = useProductList()
    const [counterVisible, setCounterVisible] = useState()
    const [count, setCount] = useState(0)

    useEffect(()=>{
        if (localStorage.getItem("LISTDATA")){
            setCounterVisible("visible")
            setCount(JSON.parse(localStorage.getItem("LISTDATA")).length)
         }
         else{
            setCounterVisible("hidden")
         }
    }, [])        

    function saveToStorage(){
        if (localStorage.getItem("LISTDATA")){
            localStorage.clear()
            setListData(productData)
            setCounterVisible("hidden")
        }
        else{
            localStorage.setItem("LISTDATA", JSON.stringify(listData))
            setCount(listData.length)
            setCounterVisible("visible")

        }
    }

    const utils = ["Save"].join(" ")

    return(
        <div data-testid={ testID } className={ utils } onClick={() => saveToStorage()}>
            <div className="icon">
            <FontAwesomeIcon icon={faSave} />
            </div>
            <div className="counter" style={{ visibility: counterVisible }}>
                <p>{count}</p>
            </div>
        </div>
    )

}

Save.propTypes = {
    testID: PropTypes.string
}

export default Save