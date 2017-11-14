import React from 'react';

const NUMBER_OF_BUTTONS = 5;

function Pagination ({ pagesCount, currentPage, changePage }) {
    const paginationLength = pagesCount <= NUMBER_OF_BUTTONS ? pagesCount : NUMBER_OF_BUTTONS;

    const getPaginationStart = (count, current) => {
        if (current >= Math.ceil(NUMBER_OF_BUTTONS / 2) && current <= count - Math.floor(NUMBER_OF_BUTTONS / 2)) {
            return current - Math.floor(NUMBER_OF_BUTTONS / 2);
        }
        if (current < Math.ceil(NUMBER_OF_BUTTONS / 2)) {
            return 1;
        }
        if (current > count - Math.floor(NUMBER_OF_BUTTONS / 2)) {
            return count - paginationLength + 1;
        }
    }    
    const pages = Array.from({ length: paginationLength }, (page, idx) => page = getPaginationStart(pagesCount, currentPage) + idx);
    const active = (page) => {
        return currentPage === page ? "page-item active" : "page-item";
    }
    const previous = currentPage > 1 ? currentPage - 1 : 1;
    const next = currentPage < pagesCount ? currentPage + 1 : pagesCount;
    const nextButtonClass = currentPage === pagesCount ? "page-item disabled" : "page-item";
    const previousButtonClass = currentPage === 1 ? "page-item disabled" : "page-item";
    return (
        <div>
            <nav aria-label="...">
                <ul className="pagination pagination-sm justify-content-center">
                    <li className={previousButtonClass}>
                        <a id="1" className="page-link" onClick={changePage} >{"<<"}</a>
                    </li>                   
                    <li className={previousButtonClass}>
                        <a id={previous} className="page-link" onClick={changePage} >Previous</a>
                    </li>
                        {pages.map((page, idx) => (
                            <li key={idx} className={active(page)}><a id={page} className="page-link" onClick={changePage}>{page}</a></li>
                        ))}                    
                    <li className={nextButtonClass}>
                        <a id={next} className="page-link" onClick={changePage} >Next</a>
                    </li>
                    <li className={nextButtonClass}>
                        <a id={pagesCount} className="page-link" onClick={changePage} >{">>"}</a>
                    </li>
                </ul>
            </nav>            
        </div>
    )
}

export default Pagination;
