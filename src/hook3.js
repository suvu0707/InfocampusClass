import React, { useState } from 'react';
function HookThree(){
    const[n1,pickValue1]=useState(0);
    const[n2,pickValue2]=useState(0);
    const[n3,pickValue3]=useState(0);
    const[result,updateResult]=useState("");
    const one=()=>{
        updateResult(n2+" is looking for "+n3+" service in "+n1);
    }
    return(
        <div id="height500">
            <p>
                <select onChange={obj=>pickValue1(obj.target.value)}>
                    <option>Chooes Your City</option>
                    <option>Bangalore</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Chennai</option>
                </select>
                <input type="text" placeholder='Enter Your Name' onChange={obj=>pickValue2(obj.target.value)}/>
                <select onChange={obj=>pickValue3(obj.target.value)}>
                    <option>Chooes Your Catagory</option> 
                    <option>Phone repair</option>
                    <option>Transportation</option>
                    <option>Childcare</option>
                    <option>Healthcare</option>
                </select>
                
            </p>
            <p>
                <button onClick={one}> Go</button>
            </p>
            <h2> {result} </h2>
        </div>
    )
}
export default HookThree;