import React from 'react';
import Product from "./components/Product/Product";
    
//Class App.............................
class App extends React.Component{
   
    state = {
        Products : [
            {title:"React.js" , price:"99$"},
            {title:"Node.js" , price:"89$"},
            {title:"js" , price:"79$"},
        ],
    };

    clickHandler = () =>{
        this.setState({
            Products : [
                {title:"React.js" , price:"79$"},
                {title:"Node.js" , price:"69$"},
                {title:"js" , price:"89$"},
            ],
        })
    }
    render() {
        return(
        <div className='container' id='title'>
        <h1>Shopping App</h1>
        {this.state.Products.map((product) => {
            return <Product name={product.title} price={product.price} />;
        })}
        <button onClick={this.clickHandler}>Change Price</button>
    </div>
    );
    }
}

export default App;

//Functional App...............
/*const App=()=>{
    state = {
        Products : [
            {title:"React.js" , price:"99$"},
            {title:"Node.js" , price:"89$"},
            {title:"js" , price:"79$"},
        ],
    };
    return(
        <div className='container' id='title'>
        <h1>Shopping App</h1>
        {this.state.Products.map((Product) => {
            return <Product name={Product.title} price={Product.price} />;
        })}
    
    
    </div>
    );
    };
    export default App;*/