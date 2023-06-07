import React,{Component} from 'react';

class MyClass3 extends Component{
    constructor(){
        super();
        this.state={
            userlist:[]
        }
    }

    getuser=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(userArray=>{
            this.setState({
                userlist : userArray
            })
        })
    }

    componentDidMount(){                //It will execyte on (page onload) automatically after constuctur(), render().
        this.getuser();
    }

    render(){
        return(
            <div id="height500" align="center" width="500">
                <h1>Total Users : {this.state.userlist.length}</h1>
                <table cellPadding="10">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.userlist.map((user,index)=>{
                               return(
                                   <tr key={index}>
                                       <td>{user.id}</td>
                                       <td>{user.name}</td>
                                       <td>{user.email}</td>
                                       <td>{user.phone}</td>
                                       <td>{user.website}</td>
                                   </tr>
                               )
                           })
                       }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyClass3;

