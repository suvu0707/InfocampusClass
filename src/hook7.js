import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const HookSeven=()=>{
    const navigate = useNavigate()
    const[message,updataMessage]=useState("Enter Book Details");
    const[itemname,pickName]=useState("");
    const[itemprice,pickPrice]=useState("");
    const[itemqty,pickQty]=useState("");
    const[itemphoto,pickPhoto]=useState("");
    const[itemdetails,pickDetails]=useState("");

    //We have axios.get(); to fetch the data.
    //axios.post(); to add new data.
    //axios.delete(); to delete new data.
    //axios.put(); to update new data.

    const save=()=>{
        var url="http://localhost:1234/itemlist";
        var newitem=  {
            // "id":2, not needed
            "name":itemname,
            "price":itemprice,
            "qty":itemqty,
            "photo":itemphoto,
            "details":itemdetails

        };
        axios.post(url,newitem)
        .then(response=>{
            updataMessage(itemname+" Saved Successfully !")
            navigate('/hook6.html')
        })

    }

    return(
        <div id="height500">
            <h1 align="center">Add Item To Json Server</h1>
            <p align="center">{message}</p>
            <table align="center" cellPadding="10">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <td><input type="text" onChange={obj => pickName(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Price</th>
                        <td><input type="text" onChange={obj => pickPrice(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Quantity</th>
                        <td><input type="text" onChange={obj => pickQty(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Details</th>
                        <td><input type="text" onChange={obj => pickDetails(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th>Item Photo</th>
                        <td><input type="text" onChange={obj => pickPhoto(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <button onClick={save}>Save Item</button>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default HookSeven;