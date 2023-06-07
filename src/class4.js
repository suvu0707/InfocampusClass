import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Myclass4 extends Component{
    constructor(){
        super();
        this.state={
            itemlist:[],
            message : ""
        }
       
    }

    getitem=()=>{
        fetch("http://localhost:1234/itemlist")
        .then(response=>response.json())
        .then(itemArray=>{
            this.setState({itemlist :itemArray})
        })
    }

    componentDidMount(){
        this.getitem();
    }

    deleteItem =(id)=>{
        this.setState({message : "Please wait processing"})
       var url="http://localhost:1234/itemlist/"+id;
       axios.delete(url)
       .then(response=>{
        // updateMessage(name+" Deleted Successfully !")
        this.getitem(); // To reload the list
        this.setState({message : "Item Deleted Successfully !"})
    })
    }

    render(){
        return(
            <div id="height500">
                <h1>Total Items :  {this.state.itemlist.length}</h1>
                <Link to="/class7.html">Add New Item</Link>
                <p align="center">{this.state.message}</p>
                {
                    this.state.itemlist.map((info, index)=>{
                        return(
                            <div key={index} className="four">
                                <h3> {info.name} </h3>
                                <img src={info.photo} height="120" width="100%"/>
                                <p>Price : {info.price} </p>
                                <p> {info.details} </p>
                                <button onClick={this.deleteItem.bind(this,info.id)}>Delete</button>
                            </div>
                        )
                    })
                }
                <div id="clearblock"></div>
            </div>
        )
    }
}

export default Myclass4;