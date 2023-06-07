import React, {useState} from 'react';  //WE call the usestate

function Register(){
    const[userlist,updateUser]=useState(["Ramesh","Ganesh","Raju"]);  //With the help of useState we Create a constant variable and functionand inside useStat we pass a array directly and add some value like Ramesh ......
    const one=()=>{
        updateUser(userlist=>[...userlist,"Alex"]); //a=a+b
    } 
    // Here we call a function one(),Inside it we run updateUser().Inside it you call the current value userlist. To add a user 
    // inside an Array, You cannot pass the value directly under the userlist value.So for this you use fat arrow method to 
    // use spread operator. The spraed operator take three parameter. The 1st is your original array and 2nd is the new value.  
    // (=>) is like (equal to).
    
    return(
        <div id="height500">
            <h1>Registered Users : {userlist.length}</h1>
            <button onClick={one}>Add User</button>    {/*  After clicked one() run and new user added */}
            {
                userlist.map((fullname,index)=>{
                    return(
                        <p key={index}>{fullname}</p>   //After clicking the button the data printed here
                    )
                })
            } 
        </div>
    )
}

export default Register;