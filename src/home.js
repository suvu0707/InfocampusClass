import React,{useState} from "react";  // import React and useState from react

const MyHome=()=>{
    let city=["Bangalore","Mumbai","Pune","Delhi"];
    const[Bangalore,Mumbai,Pune,Delhi]=city;
    const[abc,xyz]=useState(10);  //With the help of useState we Create a constant variable and function
    const[message,updataMessage]=useState(0);
    const one=()=>{                  // 2.Inside the one(), another function xyz() called.
        xyz(abc+5);                  // 3. Inside xyz(), we pass the value of abc+5.Due to default value of abc=10.So after every button click The value became incrimented by 5
        updataMessage(message+1);   
    }
    const two=()=>{
        xyz(abc-5);
        updataMessage(message+1);
    }
    return(
        <div id="height500">
            <h1>Welcome Home</h1>
            <p>{city[2]}</p>
            <h2>{abc}</h2>
            <p>Total Clicks : {message}</p>
          <button onClick={one}>+ By 5</button> <br></br>     {/* 1. When you click the button, Then one() called */}
            <button onClick={two}>- By 5</button>
           
        </div>
    )
}
export default MyHome;
