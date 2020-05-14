import React from 'react';
import './Pagination.css';

export default function Pagination(props) {
    const {maxPage, currentPage, setCurrentPage} = props;
    const pageList = Array.from({length: maxPage}).map((_, index) => index + 1);
    const pageStartIndex = Math.min(Math.max(currentPage - 1 - 2, 0), maxPage - 5);
    const showedPageList = pageList.slice(pageStartIndex, pageStartIndex + 5);

    return (
        <div className="pagination">
            <ul className="page-list">
                {currentPage !== 1 && <li className="page-item" key="last" onClick={() => setCurrentPage(currentPage - 1)}>&#60;&#60;</li>}
                {
                    showedPageList.map(item => {
                        if (item === currentPage) {
                            return <li className="page-item page-item-active" key={item} onClick={() => setCurrentPage(item)}>{item}</li>
                        }
                        return <li className="page-item" key={item} onClick={() => setCurrentPage(item)}>{item}</li>
                    })
                }
                {currentPage !== maxPage && <li className="page-item" key="next" onClick={() => setCurrentPage(currentPage + 1)}>&#62;&#62;</li>}
            </ul>
        </div>
    )
}