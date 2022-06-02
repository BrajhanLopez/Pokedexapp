import React, { useEffect, useState } from 'react';

const Pagination = ({postperpage, totalpost, paginate}) => {
    const pageNumber = []
    let [matrix, setmatrix] = useState([])
    const p=0
    for (let i = 0; i <= Math.ceil(totalpost / postperpage);i++)
    {
        pageNumber.push(i)
        
    }
    pageNumber.shift()

  


    useEffect(()=>{

        setmatrix(pageNumber.splice(p,12))
        
    },[])
    //console.log(matrix);

   

        let nextpp = () => {

            setmatrix(pageNumber.splice(matrix[1],12))
            //console.log(matrix);
        }


   
    
   // console.log(matrix);
//console.log(pageNumber);



    return (
        <div>
            <ul className='pag-ul'>
            <button className='pag-button nextback' onClick={()=>paginate(1)}>back</button>
                {matrix.map(number =>(
                   
                    <li key={number}>
                        <button className='pag-button' onClick={()=>paginate(number)}>
                            {number}
                            </button>
                    </li>

                ))}
                <button className='pag-button nextback' onClick={()=>nextpp()}>next</button>
            </ul>
        </div>
    );
};

export default Pagination;