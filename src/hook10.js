import React from 'react';
import ItemDetails from './hook11';

const ItemList=()=>{
    const Item=[
        {name:"Banana",price:200,qty:"100/kg"},
        {name:"Grapes",price:149,qty:"89/kg"},
        {name:"Banana",price:68,qty:"90/kg"},
        {name:"Watermelon",price:134,qty:"180/kg"},
        {name:"Pinaaaple",price:200,qty:"160/kg"}
    ]
    return(
        <div id="height500">
            <h1>React JS Component Re-use Example</h1>
            <ItemDetails itemname="Mango" itemprice="200/kg" itemqty="5"/>
            <ItemDetails itemname="Banana" itemprice="58/kg" itemqty="15"/>
            <ItemDetails itemname="Orange" itemprice="124/kg" itemqty="15"/>
            <ItemDetails itemname="Milk" itemprice="40/kg" itemqty="15"/>

            {
                Item.map((info,index)=>{
                    return(
                        <ItemDetails 
                            itemname={info.name} 
                            itemprice={info.price} 
                            itemqty={info.qty}
                            key={index}
                            />
                    )
                })
            }

            <div id="clearblock"></div>
        </div>
    )
}

export default ItemList;