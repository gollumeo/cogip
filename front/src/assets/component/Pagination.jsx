import {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';

function Pagination(props) {
    const { data } = props;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const itemsPerPage = 10;

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    console.log(currentItems);
    return (
        <>
        <div className='lists'>
            {currentItems.map(list => {
                return (
                    <div className='list'>
                        
                    </div>
                );
            })}

        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
        </>
    );
};

export default Pagination;