import { useState, useEffect } from 'react'
import PropTypes, { array } from 'prop-types'
import SearchHomepageFilter from './../../molecules/SearchHomepageFilter'
import Productlist from './../Productlist'
import PaginationShow from './../../atoms/PaginationShow'

const ProductlistFilter = ({ testID, productData, onChangeSearch}) => {

    const utils = ["ProductlistFilter"].join(" ")
    const [sliced, setSliced] = useState([])
    const [page, setPage] = useState(1);

    useEffect(()=>{
        setSliced(productData.slice((page-1)*8, page*8))
    }, [page])

    useEffect(()=>{
        setSliced(productData.slice((page-1)*8, page*8))
    }, [productData])

    const handleChangePage = (page) =>{
        setPage(page)
    }

    return(
        <div data-testid={ testID } className={ utils }>
            <SearchHomepageFilter onChangeSearch={onChangeSearch}/>
            <Productlist productData={sliced} />
            <PaginationShow currentPage={page} productData={productData} onChangePage={handleChangePage} />
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