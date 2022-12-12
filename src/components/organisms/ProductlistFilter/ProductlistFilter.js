import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EnvironmentSetting from './../../../../src/config/EnvironmentSetting.js'
import SearchHomepageFilter from './../../molecules/SearchHomepageFilter'
import Productlist from './../Productlist'
import PaginationShow from './../../atoms/PaginationShow'
import { useProductList } from "./../../../context/ProductListContext"

const ProductlistFilter = ({ testID, productData }) => {

    const utils = ["ProductlistFilter"].join(" ")
    
    const [listData, setListData] = useProductList()
    const pageItemCount = EnvironmentSetting.pageItemCount
    const [pageCount, setPageCount] = useState(1)
    const [sliced, setSliced] = useState([])
    const [page, setPage] = useState(1)

    const handleChangePage = (page) =>{
        setPage(page)
        setSliced(listData.slice((page-1)*pageItemCount, page*pageItemCount))
        setPageCount(Math.ceil(listData.length/pageItemCount))
    }
 
    useEffect(()=>{
        handleChangePage(1)
    }, [listData])

    useEffect(()=>{
        localStorage.getItem("LISTDATA") ?
        setListData(JSON.parse(localStorage.getItem("LISTDATA")))
        :
        setListData(productData)
    }, [])
    
    function onChangeSearch(event) {
        let searchTerm = event.target.value
        let searchData = productData
        searchData = searchData.filter(
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
        setListData(searchData)
        handleChangePage(1)
    }

    return(
        <div data-testid={ testID } className={ utils }>
            <SearchHomepageFilter onChangeSearch={onChangeSearch} productData={productData}/>
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