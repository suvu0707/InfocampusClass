import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Practice2() {
    const[item,updateItem]=useState([]);
    const[search,updateSearch]=useState('')

    // const getitem=()=>{
    //     fetch("http://localhost:1234/itemlist")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         updateItem(data);
    //     })
    // }

    const getitem=()=>{
        axios.get("http://localhost:1234/itemlist")
        // .then(response=>response.json())
        .then(response=>{
            updateItem(response.data);
        })
    }

    useEffect(()=>{
        getitem()
    },[1])

    const deleteItem=(id)=>{
        var url="http://localhost:1234/itemlist/"+id
       axios.delete(url).then(response=>{getitem()})
    }
    
    return (
        <div id="height500">
            <h3>Available Products : {item.length}</h3>
            <input type="text" onChange={obj => updateSearch(obj.target.value)} />
            {/* <p align="center">{message}</p> */}
            <p align="right"><Link to="/hook7.html">Add New Item</Link></p>
            {
                item.filter((iteminfo) => iteminfo.name.includes(search)).map((iteminfo, index) => {
                    return (
                        <div key={index} className="four">
                            <h3>{iteminfo.name}</h3>
                            <img src={iteminfo.photo} height="150" width="200" />
                            <p>Price : {iteminfo.price}</p>
                            <p>{iteminfo.details}</p>
                            <button onClick={deleteItem.bind(this, iteminfo.id, iteminfo.name)}>Delete</button>
                            {/* <Link to={`/hook7edit/${iteminfo.id}`}>Edit</Link> */}
                            {/* <button onClick={deleteItem.bind(this,iteminfo.id,iteminfo.name)}>Delete</button> */}
                        </div>

                    )
                })
            }
            <div id="clearblock"></div>
        </div>
    )
}

export default Practice2