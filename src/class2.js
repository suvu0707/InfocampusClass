import React,{Component} from 'react';

class MyClass2 extends Component{
    constructor(){
        super()
        this.state={
            booklist : ["HTML","CSS","Javascript","React Js","Angular","Python"],
            newbook : "",
            message : "Please Enter Book Name"
        }              
    }

    pickName=(obj)=>{
        this.setState({
            newbook : obj.target.value
        })
    }
    save=()=>{
        this.setState({
            booklist : this.state.booklist.concat(this.state.newbook),
            message : this.state.newbook + " Added Successfully",
            newbook : ''
        })
    }
    deletebook=(bookindex,bookname)=>{
      this.state.booklist.splice(bookindex,1); // to delete a given index from booklist
      this.setState({
          booklist : this.state.booklist,  //After deleteing the element, remaining elemement will update in state
          message : bookname +" Deleted Successfully"
      })

    }


   
    render(){                     
        return(
            <div id="height500" align="center">
               <h2>Available Books : {this.state.booklist.length}</h2>
               <p>{this.state.message}</p>

               <table align="left" cellPadding="10">
                   <thead>
                       <tr>
                           <th>Book Name</th>
                           <td><input type="text" onChange={this.pickName} value={this.state.newbook}/></td>
                       </tr>
                       <tr>
                           <th colspan="2">
                               <button onClick={this.save}>Save Book</button>
                               <p>You Enter : {this.state.newbook}</p>
                           </th>
                       </tr>
                   </thead>
               </table>

               <table cellPadding="15" align="right" width="500" >
                   <thead>
                       <tr>
                           <th>Sl No</th>
                           <th>Book Name</th>
                           <th>Delete</th>
                       </tr>
                   </thead>
                   <tbody align="center">
                       {
                           this.state.booklist.map((name,index)=>{
                               return(
                                   <tr key={index}>
                                       <td>{index}</td>
                                       <td>{name}</td>
                                       <td><button onClick={this.deletebook.bind(this,index,name)}>Delete</button></td>
                                   </tr>
                               )
                           })
                       }
                   </tbody>
               </table>
               <div id='clearblock'></div>
            </div>
        )
    }
}

export default MyClass2;