import React from 'react';

const Pagination = ({ BlogsPerPage, totalBlogs, paginate, currentPage }) => {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / BlogsPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    return (
        <nav style={{backgroundColor: "white"}}>
            <ul className='ul-links'>
                {
                    pageNumbers.map((number) => {
                        return (
                            <li key={number}>
                                <a onClick={() => paginate(number)} href='#' style={{color: "black"}}>{number}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )


}

export default Pagination