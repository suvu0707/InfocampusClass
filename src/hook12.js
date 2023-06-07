import React from "react";
import {useParams,Link} from 'react-router-dom';

const Product =()=>{
    const{pid,pname,pprice,pic}=useParams();
    return(
        <div id="height500" align="center">
            <h1>React useParams() Example </h1>
            <p>
                <Link to="/product/1/Mango/200/1.jpg" className="abc">Mango</Link>
                <Link to="/product/2/Apple/320/2.jpg" className="abc">Apple</Link>
                <Link to="/product/3/Orange/234/3.jpg" className="abc">Orange</Link>
                <Link to="/product/4/Banana/121/4.jpg" className="abc">Banana</Link>
                <Link to="/product/5/Grapes/453/2.jpg" className="abc">Grapes</Link>
                <Link to="/product/6/Papaya/89/1.jpg" className="abc">Papaya</Link>
            </p>
            
            <div className="four">
                <h3>Product id {pid}</h3>
                <p> {pname}</p>
                <img src={pic} height="150" width="90%"/>
                <p> Rs. {pprice}/kg</p>
            </div>
        </div>
    )
}

export default Product;