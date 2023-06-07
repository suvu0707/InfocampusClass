import React from 'react';

function Contactus(){
    let contactName=[
                    "678533899",
                    "788965444",
                    "986543234",
                    "345678976",
                    "2345213456",
                    "0987654322",
                    "346578900",
                    "543219876",
                    "6754345689",
                    "56789067567",
                    "986543234",
                    "345678976",
                    "2345213456",
                    "0987654322",
                    "346578900"
                ]
    return(
        <div id="height500">
            <h1>{contactName.length} - Contact Us</h1>
            {
               contactName.map((cname,index)=>{
                   return(
                       <p className="four" key={index}>{index+1} . {cname}</p>
                   )
               })
           }
        </div>
    )
}

export default Contactus;