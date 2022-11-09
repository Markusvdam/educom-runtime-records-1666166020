import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EnvironmentSetting from './../../../../src/config/EnvironmentSetting.js'
import SearchHomepageFilter from './../../molecules/SearchHomepageFilter'
import Productlist from './../Productlist'
import PaginationShow from './../../atoms/PaginationShow'

const ProductlistFilter = ({ testID, productData, onChangeSearch}) => {
    const utils = ["ProductlistFilter"].join(" ")
    
    let dataDisplay = productData
    const pageItemCount = EnvironmentSetting.pageItemCount
    const [pageCount, setPageCount] = useState(Math.ceil(dataDisplay.length/pageItemCount))
    const [sliced, setSliced] = useState([])
    const [page, setPage] = useState(1)
    let searchTerm = ""

    /// TODO FIX CLICK ON PAGE WHEN SEARCH = ACTIVE
    const handleChangePage = (page) =>{
        setPage(page)
        setSliced(dataDisplay.slice((page-1)*pageItemCount, page*pageItemCount))
        setPageCount(Math.ceil(dataDisplay.length/pageItemCount))
    }

    useEffect(()=>{
        handleChangePage(1)
    }, [])

    function onChangeSearch(event) {
        searchTerm = event.target.value
        dataDisplay = dataDisplay.filter(
            (val)=>{
                if (searchTerm == ""){
                    return productData
                }
                else if (
                    val.data.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.data.genre.toLowerCase().includes(searchTerm.toLowerCase())
                ){
                    return val
                }
            }
        )
        handleChangePage(1)
    }

    return(
        <div data-testid={ testID } className={ utils }>
            <SearchHomepageFilter onChangeSearch={onChangeSearch}/>
            <Productlist productData={sliced} />
            <div className='PaginationContainer'>
            <PaginationShow currentPage={page} pageCount={pageCount} onChangePage={handleChangePage} />
            </div>
        </div>
    )
}

/*
const data = [
]*/

ProductlistFilter.propTypes = {
    testID: PropTypes.string
}

export default ProductlistFilter