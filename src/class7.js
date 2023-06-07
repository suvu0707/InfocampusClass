import React, { Component } from 'react';
import axios from 'axios';

class MyClass7 extends Component {
    constructor() {
        super();
        this.state = {
            pname: "",
            pprice: "",
            pqty: "",
            pphoto: "",
            pdetails: "",
            message: "Enter Item Details"
        }
    }
    pickName = (obj) => {
        this.setState({ pname: obj.target.value })
    }

    pickPrice = (obj) => {
        this.setState({ pprice: obj.target.value })
    }

    pickPhoto = (obj) => {
        this.setState({ pphoto: obj.target.value })
    }

    pickQty = (obj) => {
        this.setState({ pqty: obj.target.value })
    }

    pickDetails = (obj) => {
        this.setState({ pdetails: obj.target.value })
    }

    save = () => {
        var url = "http://localhost:1234/itemlist";
        var iteminfo = {
            "name": this.state.pname,
            "price": this.state.pprice,
            "qty": this.state.pqty,
            "photo": this.state.pphoto,
            "details": this.state.pdetails
        };
        axios.post(url,iteminfo).then(response=>{
            this.setState({
                message: this.state.pname + " Added Successfully",
                pname: "",
                pprice: "",
                pqty: "",
                pphoto: "",
                pdetails: ""
            })
        })
    }


    render() {
        return (
            <div id="height500">
                <h1>Add New Item</h1>
                <p>{this.state.message}</p>
                <table cellpadding="10">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <td><input type="text" value={this.state.pname} onChange={this.pickName} /></td>
                        </tr>
                        <tr>
                            <th>Item Price</th>
                            <td><input type="text" value={this.state.pprice} onChange={this.pickPrice} /></td>
                        </tr>
                        <tr>
                            <th>Item Quantity</th>
                            <td><input type="text" value={this.state.pqty} onChange={this.pickQty} /></td>
                        </tr>
                        <tr>
                            <th>Item Photo</th>
                            <td><input type="text" value={this.state.pphoto} onChange={this.pickPhoto} /></td>
                        </tr>
                        <tr>
                            <th>Item Details</th>
                            <td><input type="text" value={this.state.pdetails} onChange={this.pickDetails} /></td>
                        </tr>

                        <tr>
                            <th colSpan="2">
                                <button onClick={this.save}>Save</button>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default MyClass7;