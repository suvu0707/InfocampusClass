import React,{Component} from 'react';

class Myclass6 extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className='four'>
                <h3>{this.props.name}</h3>
                <img src={this.props.photo} height="120" width="100%"/>
                <p>Price : {this.props.price}</p>
                <p>{this.props.details}</p>
            </div>
        )
    }

}
export default Myclass6;