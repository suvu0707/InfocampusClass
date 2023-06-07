import React from 'react';
const ItemDetails=(props)=>{
    return(
        <div className='four'>
            <h5>{props.itemname}</h5>
            <p>{props.itemprice}</p>
            <p>{props.itemqty}</p>
            <button>Buy Now</button>
        </div>
    )
}

export default ItemDetails;