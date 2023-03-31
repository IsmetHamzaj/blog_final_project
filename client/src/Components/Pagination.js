import React from 'react';

const Pagination = ({ BlogsPerPage, totalBlogs, paginate, currentPage }) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / BlogsPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
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
        </nav>
    )


}

export default Pagination