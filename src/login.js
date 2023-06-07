import React,{useState} from 'react';

function Login(){
    const[user,updateUser]=useState(["Ramesh","Ganesh","Suresh"]);
    console.log("i am herrrrr")
    const[newuser,pickuser]=useState("");    //1.To take the value from textbox, We create a new variable and function by using useState
    const save=()=>{
        updateUser(user=>[...user,newuser])
    }
    const deleteuser=(userindex)=>{    //We called here a deleteuser() and we have to know which user we want to delete
       user.splice(userindex,1);      
       // This will delete the user from your user Array and after that Array needs to be updated. If not the user will deleted but the page not reload.
       updateUser(user=>[...user]);   // Updating remaining user under user Array
    }
    return(
        <div id="height500" align="center">
            <h1>Total Users : {user.length}</h1>
            <p>
                Enter fullname : <input type="text" onChange={obj=>pickuser(obj.target.value)}/>    
                {/*  2. After Then the target is to take the value from textbox and give it to newuser. So for this pickuser() is responsible. So we will go to the textbox.Then we are going to create a object(obj here) of our textbox which is pointing to the textbox.Then follow the fat arrow method and then call your pickuser() and inside it pass the value of current textbox .As soon as you start typing your value goes to the new user via pickuser()  */}
                <button onClick={save}>Save User</button>
            </p>
            <p>{newuser}</p>
            <table align="center" cellPadding="10" width="500">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Full Name</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody align="center">
                    {
                        user.map((fullname,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{fullname}</td>
                                    <td><button onClick={deleteuser.bind(this,index) }>Delete</button></td>
                                    {/* In map() whenever you call another function inside it with any input with parameter, then you cannot call that function directly. So to fix this we use a function named bind() and through bind() we send the input to deleteuser(). bind() needs minimum one parameter which is "this" a fixed parameter and you add another parameter that is your own value. Then you get the result */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Login;