import React from 'react';

const Pagination = ({postperpage, totalpost, paginate}) => {
    const pageNumber = []
    
    for (let i = 0; i <= Math.ceil(totalpost / postperpage);i++)
    {
        pageNumber.push(i)
        
    }
    pageNumber.shift()
//console.log(pageNumber);
    return (
        <div>
            <ul className='pag-ul'>
                
                {pageNumber.map(number =>(
                    <li key={number}>
                        <button className='pag-button' onClick={()=>paginate(number)}>
                            {number}
                            </button>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default Pagination;