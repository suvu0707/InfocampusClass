import react,{useState} from "react";
const HookFive=()=>{
    const[commentlist,updateComment]=useState([]);
    const getcomment=()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response=>response.json())
        .then(commentArray=>{
            updateComment(commentArray);
        })
    }
    return(
        <div id="height500">
            <button onClick={getcomment}>Click To Load Comments</button>
            <h3>Total Comment : {commentlist.length}</h3>
            {
                commentlist.map((info,index)=>{
                    return(
                    <p key={index}>{info.id} {info.body}</p>
                    )
                })
            }
        </div>
    )
}
export default HookFive;