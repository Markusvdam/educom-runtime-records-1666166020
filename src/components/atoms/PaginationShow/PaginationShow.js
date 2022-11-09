import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-bootstrap/Pagination'

const PaginationShow = ({ testID, currentPage, pageCount, onChangePage}) => {

    const utils = ["PaginationShow"].join(" ")
    let active = currentPage;
    let pagesCount = pageCount
    let pages = [];

    useEffect(()=>{
        pagesCount = pageCount
    }, [pageCount])

    for (let number = 1; number <= pagesCount; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === active} onClick={() => onChangePage(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return(
        <div data-testid={ testID } className={ utils }>
            <Pagination >{pages}</Pagination>
        </div>
    )
}

PaginationShow.propTypes = {
    testID: PropTypes.string
}

export default PaginationShow 