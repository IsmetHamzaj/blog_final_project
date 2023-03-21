import React from 'react';

const Pagination = ({ BlogsPerPage, totalBlogs, paginate, currentPage }) => {
    let pageNumbers = [];

    for (let i = 1; i <= totalBlogs / BlogsPerPage; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className='ul-links'>
                {
                    pageNumbers.map((number) => {
                        return (
                            <li key={number}>
                                <a onClick={() => paginate(number)} href='#'>{number}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={() => paginate(currentPage + 1)}>Next</button>
            <button onClick={() => paginate(currentPage - 1)}>Prev</button>
        </nav>
    )


}

export default Pagination