import React, { useState } from 'react';
function HookTwo(){
    const[n1,pickValue1]=useState(0);
    const[n2,pickValue2]=useState(0);
    const[n3,pickValue3]=useState(0);
    const[result,updateResult]=useState("");
    const one=()=>{
        if(n1>n2 && n1>n3){
            updateResult(n1)
        }
         else if(n2>n1 && n2>n3){
            updateResult(n2)
        }
        else{updateResult(n3)}
    }
    return(
        <div id="height500">
            <h1>Highest of three numbers</h1>
            <p>
                <input type="number" onChange={obj=>pickValue1(obj.target.value)}/>
                <input type="number" onChange={obj=>pickValue2(obj.target.value)}/>
                <input type="number" onChange={obj=>pickValue3(obj.target.value)}/>
            </p>
            <p>
                <button onClick={one}> Find Highest</button>
            </p>
            <h2>The Highest Number Is : {result} </h2>
        </div>
    )
}
export default HookTwo;