// import React from 'react';
import React,{useState} from 'react';

function Customer(){
    let mycustomer=["Ramesh","Suresh","Ganesh","Samresh","Jitesh","Dipesh","Rupesh"];
    const[customerlist,updateCustomer]=useState(mycustomer);
    const[newcustomer,pickCustomer]=useState("");
    const save=()=>{
        updateCustomer(customerlist=>[...customerlist,newcustomer])
    }
    const deleteuser=(customerindex)=>{
        customerlist.splice(customerindex,1);
        updateCustomer(customerlist=>[...customerlist]);
    }
    return(
        <div id="height500">
            <h1> {mycustomer.length} - Customer</h1>
            <p>
                New Customer : <input type="text" onChange={obj=>pickCustomer(obj.target.value)}/>
                <button onClick={save}>Save Customer </button>
            </p>
            {
                customerlist.map((fullname,index)=>{
                    return(
                        <p className='four' key={index}>
                            {index}. {fullname}
                            <br/><br/>
                            {/* <p>{index}</p> */}
                            <button onClick={deleteuser.bind(this,index)}> Delete</button>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Customer;