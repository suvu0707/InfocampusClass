import React,{Component} from 'react';
import Myclass6 from './class6';

class Myclass5 extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="height500">
                <h1>React Class Component Props Example</h1>
                <Myclass6 name="Apple" price="Rs. 300" photo="1.jpg" details="good"/>
                <Myclass6 name="Apple" price="Rs. 300" photo="2.jpg" details="good"/>
                <Myclass6 name="Apple" price="Rs. 300" photo="3.jpg" details="good"/>
                <Myclass6 name="Apple" price="Rs. 300" photo="4.jpg" details="good"/>
            </div>
        )
    }

}
export default Myclass5;