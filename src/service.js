import React from 'react';

function Service(){
    let myservice=[
        {
            name:"Website Devlopment", 
            technology:["HTML","CSS","Javascript","PhP","nodejs","mysql"]
        },
        {
            name:"Mobile App Devlopment", 
            technology:["Android","iOS","Kotlin","Phonegap","Window"]
        },
        {
            name:"Software Devlopment", 
            technology:["Java",".Net","Node JS","Python","Ruby Rail"]
        }
    ];
    return(
        <div id="height500">
            <h1> {myservice.length} -  Our Services</h1>
          {
                myservice.map((info,index)=>{
                    return(
                       <fieldset className='service' key={index}>
                           <legend>{info.name} - {info.technology.length}</legend>

                           {
                               info.technology.map((tname,index2)=>{
                                   return(
                                       <p key={index2}>{index2+1} - {tname}</p>
                                   )
                               })
                           }
                       </fieldset>
                    )
                })
          }
        </div>
    )
}

export default Service;