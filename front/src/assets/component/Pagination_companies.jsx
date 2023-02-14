import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import '../scss/pagination.scss';

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
            <section className='table_last_invoices'>
                <table>
                    <thead> 
                        <tr>
                            <th>Name</th>
                            <th>TVA</th>
                            <th>Country</th>
                            <th>Type</th>
                            <th>Created at</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {currentItems.map(list => {
                            console.log(list);
                            return (
                                <>
                                    <tr key={list.id}>
                                        <th>{list.name}</th>
                                        <th>{list.tva}</th>
                                        <th>{list.country}</th>
                                        <th>{list.type_id}</th>
                                        <th>{list.created_at}</th>
                                    </tr>
                                </>
                            );
                        })}
                    </tbody>
                </table>
            </section>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName='li_page'
                pageLinkClassName='page-num'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active'
            />
        </>
    );
};

export default Pagination;