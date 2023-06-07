import React, { useState } from 'react';
import HookTwo from './hook2';
function HookOne(){
    const[n1,pickValue1]=useState(0);
    const[n2,pickValue2]=useState(0);
    const[result,updateResult]=useState(0);
    const one=()=>{
        updateResult(parseInt(n1)+parseInt(n2));
    }
    const two=()=>{
        updateResult(parseInt(n1)-parseInt(n2));
    }
    const three=()=>{
        updateResult(parseInt(n1)*parseInt(n2));
    }
    const four=()=>{
        updateResult(parseInt(n1)/parseInt(n2));
    }
    const five=()=>{
        updateResult(parseInt(n1)%parseInt(n2));
    }
    return(
        <div id="height500">
            <h1>React, useState() State Management</h1>
            <p>
                Number One : <input type="number"
                             onChange={obj=>pickValue1(obj.target.value)}/>
                Number Two : <input type="number"
                             onChange={obj=>pickValue2(obj.target.value)}/>
            </p>
            <p>
                <button onClick={one}> + </button>
                <button onClick={two}> - </button>
                <button onClick={three}> * </button>
                <button onClick={four}> / </button>
                <button onClick={five}> % </button>
            </p>
            <h2>The Result Is : {result} </h2>
            <hr color="orange" size="10"/>
            <HookTwo/>    {/*  //Nested Component */}
        </div>
    )
}
export default HookOne;