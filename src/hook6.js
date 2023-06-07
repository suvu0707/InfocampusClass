import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const HookSix=()=>{
    const[item,updateItem]=useState([]);
    const[search,updateSearch]=useState("");
    const getitem=()=>{
        fetch("http://localhost:1234/itemlist")
        .then(response=>response.json())
        .then(itemArray=>{
            updateItem(itemArray);
            // updateItem(itemArray.reverse()); // Newly added item will come on top(Reverse order)
        })
    }
    useEffect(()=>{
        getitem();
    },[1]);
    const[message,updateMessage]=useState("");
    const deleteItem=(itemid,name)=>{
        var url= "http://localhost:1234/itemlist/"+itemid;
        axios.delete(url)
        .then(response=>{
            updateMessage(name+" Deleted Successfully !")
            getitem(); // To reload the list
        })
    }
    
    return(
        <div id="height500">
            <h3>Available Products : {item.length}</h3>
            <input type="text" onChange={obj=>updateSearch(obj.target.value)} />
            <p align="center">{message}</p>
            <p align="right"><Link to="/hook7.html">Add New Item</Link></p>
            {
                item.filter((iteminfo)=>iteminfo.name.includes(search)).map((iteminfo,index)=>{
                    return(
                        <div key={index} className="four">
                            <h3>{iteminfo.name}</h3>
                            <img src={iteminfo.photo} height="150" width="200"/>
                            <p>Price : {iteminfo.price}</p>
                            <p>{iteminfo.details}</p>
                            <button onClick={deleteItem.bind(this,iteminfo.id,iteminfo.name)}>Delete</button>
                            {/* <Link to={`/hook7edit/${iteminfo.id}`}>Edit</Link> */}
                            <Link to={'/hook7edit/'+iteminfo.id}>Edit</Link>
                            {/* <button onClick={deleteItem.bind(this,iteminfo.id,iteminfo.name)}>Delete</button> */}
                        </div>

                    )
                })
            }
            <div id="clearblock"></div>
        </div>
    )
}
export default HookSix;