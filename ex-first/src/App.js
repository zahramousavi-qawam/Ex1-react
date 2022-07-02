import React, {useState} from 'react';
import HookCounter from './components/Product/HookCounter';
import Product from './components/Product/Product'
import CounterClass from './components/Product/ClassCounter';
//Class App.............................
/*class App extends React.Component{
   
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
*/
//Functional App...............



   /* state = {
        Products : [
            {title:"React.js" , price:"99$"},
            {title:"Node.js" , price:"89$"},
            {title:"js" , price:"79$"},
        ],
    };*/
/*const stateData = useState([
    {title:"React.js" , price: "90$"},
]);
    console.log(stateData);

    const [Products , setProducts ] = useState ([
        {title:"React.js" , price:"99$"},
        {title:"Node.js" , price:"89$"},
        {title:"js" , price:"79$"},
    ]);

    const clickHandler =() =>{
        setProducts([
          {title:"React.js" , price:"79$"},
          {title:"Node.js" , price:"69$"},
          {title:"js" , price:"89$"},
        ]);
    };
    
    return(
        <div className='container' id='title'>
        <h1>Shopping App</h1>
        {Products.map((Product) => {
            return <Product name={Product.title} price={Product.price} />;
        })}
    
        <button onClick={clickHandler}>Change Price</button>
        </div>
    );
    */
    function App() {

        return(
            <div className='App'>
                <CounterClass/>
            </div>
        );

    };

    export default App;