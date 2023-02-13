import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';

function Pagination(data) {
    // const { data } = data;
    console.log(data);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data.data]);

    const handlePageClick = (event) =>{
        const newOffset = (event.selected * itemsPerPage) % data.data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
        <div className='lists'>
            {currentItems.map(list => {
                console.log(list);
                return (
                    <>
                        <tr key={list.id}>
                            <th>{list.id}</th>
                            <th>{list.company_id}</th>
                            <th>{list.created_at}</th>
                            <th>{list.updated_at}</th>
                        </tr>
                    </>
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
            containerClassName="pagination"
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
        />
        </>
    );
};

export default Pagination;