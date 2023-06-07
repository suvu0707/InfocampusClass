import React,{useState,useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
const HookSevenedit=()=>{
    const { id } = useParams();
    const navigate = useNavigate()
    const[message,updataMessage]=useState("Enter Book Details");
    const[name,pickName]=useState("");
    const[price,pickPrice]=useState("");
    const[qty,pickQty]=useState("");
    const[photo,pickPhoto]=useState("");
    const[details,pickDetails]=useState("");

   
    const loadItem =  () => {
        axios.get(`http://localhost:1234/itemlist/${id}`)
        // axios.get('http://localhost:1234/itemlist/'+id)   u have to define id in useparams
        .then(response=>{
            // updateProduct(response.data)
            pickName(response.data.name);
            pickPrice(response.data.price);
            pickQty(response.data.qty);
            pickPhoto(response.data.photo);
            pickDetails(response.data.details);
        })
        // setItem(result.data);
      };
      useEffect(() => {
        loadItem();
      }, [true]);

      const update=()=>{
        var url=`http://localhost:1234/itemlist/${id}`;
        // var url='http://localhost:1234/itemlist/'+id;   check update button  (line79)
        var item=  {
            // "id":2, not needed
            "name":name,
            "price":price,
            "qty":qty,
            "photo":photo,
            "details":details

        };
        axios.put(url,item)
        .then(response=>{
            updataMessage(name+" Updated Successfully !")
            navigate('/hook6.html')
        })

    }
    return(
        <div id="height500">
            <h1 align="center">Edit Item </h1>
            <p align="center">{message}</p>
            <table align="center" cellPadding="10">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <td><input type="text" value={name} onChange={obj => pickName(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Price</th>
                        <td><input type="text" value={price} onChange={obj => pickPrice(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Quantity</th>
                        <td><input type="text" value={qty} onChange={obj => pickQty(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Details</th>
                        <td><input type="text" value={details} onChange={obj => pickDetails(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Photo</th>
                        <td><input type="text" value={photo} onChange={obj => pickPhoto(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <button onClick={update} >Update Item</button>
                            {/* <button onClick={update.bind(this,id)} >Update Item</button> */}
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
    
}
export default HookSevenedit;