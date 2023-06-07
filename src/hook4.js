import React, { useState } from "react";

const HookFour = () => {
    const [itemlist, updateItem] = useState([{ name: "Apple", price: 300, qty: 10 }]);
    const [itemname, pickName] = useState("");
    const [itemprice, pickPrice] = useState("");
    const [itemqty, pickQty] = useState("");
    const [message, updateMessage] = useState("");
    const save = () => {
        var newitem = { name: itemname, price: itemprice, qty: itemqty };
        updateItem(itemlist => [...itemlist, newitem]);
        updateMessage(itemname + " Added Successfully");
        pickName("");
        pickPrice("");
        pickQty("");

    }
    const deleteItem = (index, name) => {
        itemlist.splice(index, 1);
        updateItem(itemlist => [...itemlist]); //updating availablew item in state
        updateMessage(name + " Deleted Successfully");
    }

    return (
        <div id="height500">
            <h3 align="center">Add New Items</h3>
            <p align="center">{message}</p>
            <p align="center">
                <input type="text" placeholder="Item Name" value={itemname} className="smallinput" onChange={obj => pickName(obj.target.value)} />
                <input type="text" placeholder="Item Price" value={itemprice} className="smallinput" onChange={obj => pickPrice(obj.target.value)} />
                <input type="text" placeholder="Item Quanty" value={itemqty} className="smallinput" onChange={obj => pickQty(obj.target.value)} />
                <button onClick={save}>Save</button>
            </p>
            <h3 align="center">Available Items : {itemlist.length}</h3>
            <table align="center" cellPadding="10" width='70%'>
                <thead>
                    <th>Sl No</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </thead>

                <tbody align="center">
                    {
                        itemlist.map((iteminfo, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{iteminfo.name}</td>
                                    <td>{iteminfo.price}</td>
                                    <td>{iteminfo.qty}</td>
                                    <td>{<button onClick={deleteItem.bind(this, index, iteminfo.name)}>Delete</button>}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
export default HookFour;