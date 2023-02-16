import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import '../scss/pagination.scss';

function Pagination(data) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;
    const [valeurInput, setValeurInput] = useState('');

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.data.slice(itemOffset, endOffset).filter(element => element.name.toLowerCase().includes(valeurInput.toLowerCase())));
        setPageCount(Math.ceil(data.data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data.data, valeurInput]);

    const handlePageClick = (event) =>{
        const newOffset = (event.selected * itemsPerPage) % data.data.length;
        setItemOffset(newOffset);
    };

    function trierTable(e) {
        setValeurInput(e.target.value);
    };
    

    return (
        <>
            <input type="text" placeholder='Search company' className='input_text' value={valeurInput} onChange={trierTable}/>
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
                            return (
                                <>
                                    <tr key={list.id}>
                                        <th className='table_last_companies_name'>{list.name}</th>
                                        <th className='table_last_companies_tva'>{list.tva}</th>
                                        <th className='table_last_companies_country'>{list.country}</th>
                                        <th className='table_last_companies_type'>{list.type_id}</th>
                                        <th className='table_last_companies_created'>{list.created_at}</th>
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