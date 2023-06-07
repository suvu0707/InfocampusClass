import React,{Component} from 'react';       //1

class MyClass1 extends Component{            //2
    constructor(){                           //6            //Predefined functioon
        super()                              //7               //to call parent class constructor
        this.state={                         //8                  // state belongs to component class
            counter:5,                       //9                  //counter became as a state variable
            click:0,                         //11
            booklist : ["HTML","CSS","Javascript","React Js","Angular","Python"]
        }        //We can create a state variable with help of this.state           
    }

    one=()=>{             //15      //Youu cannot change the value of counter variable bec it is a part of state 
        this.setState({
            counter : this.state.counter+5,
            click : this.state.click+1
        })  // this.setState for modify the state variable
    }
    two=()=>{             //16
        this.setState({counter : this.state.counter-5, click : this.state.click+1})

    }
    render(){               //4        //Help you to print the statement in browswer
        return(                                        //5
            <div id="height500" align="center">
                <h1>React Class Component Simple State Management</h1>
                <h2>The Counter is :{this.state.counter}</h2>          {/* //10 */}
                <p>Total Clicks Are : {this.state.click}</p>           {/* //12 */}
               <button onClick={this.one}>Click Me To + By 5</button> {/* //13 */} {/* This is used with one Due to it is inside the class */}
               <button onClick={this.two}>Click Me To - By 5</button>  {/* //14 */}

               <h2>Available Books : {this.state.booklist.length}</h2>
               <table cellPadding="15">
                   <thead>
                       <tr>
                           <th>Sl No</th>
                           <th>Book Name</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.booklist.map((name,index)=>{
                               return(
                                   <tr key={index}>
                                       <td>{index}</td>
                                       <td>{name}</td>
                                   </tr>
                               )
                           })
                       }
                   </tbody>
               </table>
            </div>
        )
    }
}

export default MyClass1;  //3