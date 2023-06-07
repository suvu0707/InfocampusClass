import React from 'react';

function Project(){
    let myproject=[
        "http://www.infocampus.co.in",
        "http://www.uimaster.in",
        "http://www.firstinquarry.com",
        "http://www.globalleads.in",
        "http://www.campusinterview.in",
        "http://www.gyanguide.in",
        "http://www.angularexpert.in",
        "http://www.carrierliftup.in"
    ]
    return(
        <div id="height500">
            <h1> {myproject.length} - Project List</h1>
            {
                myproject.map((pname,index)=>{
                  return(
                    <p key={index}>
                    <a href={pname} target="_blank">{pname} </a>
                </p>
                  )
                })
            }
        </div>
    )
}

export default Project;