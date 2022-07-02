import React,{Component} from 'react';
class CounterClass extends Component {
    state = { count:0 }; 
   
    addoneHandler =() =>{
        this.setState((prevState)=>{
            return {count : prevState.count +1}
        });
    };
    render() { 
        return (
            <div>
                <h2>Count -{this.state.count}</h2>
                <button onClick={this.addoneHandler}>Add One</button>
            </div>
        );
    }
}
 
export default CounterClass;