import PropTypes from 'prop-types'
import SearchFieldHome from './../../atoms/SearchFieldHome';
import Filter from './../../atoms/Filter';
import Save from './../../atoms/Save';
import { useProductList } from "./../../../context/ProductListContext"

const SearchHomepageFilter = ({ testID, onChangeSearch, productData}) => {

    const utils = ["SearchHomepageFilter"].join(" ")
    const [listData, setListData] = useProductList()

    function saveToStorage(){
        localStorage.getItem("LISTDATA") ?
            localStorage.clear()
        :
        localStorage.setItem("LISTDATA", JSON.stringify(listData))
    }

    return(
        <div data-testid={ testID } className={ utils }>
            <div><SearchFieldHome onChangeSearch={onChangeSearch}/></div>
            <div><Filter /> </div>
            <div><Save productData={productData}/> </div>
        </div>
    )
}

SearchHomepageFilter.propTypes = {
    testID: PropTypes.string
}

export default SearchHomepageFilter