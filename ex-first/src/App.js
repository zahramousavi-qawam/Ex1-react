import React, {useState} from 'react';
import HookCounter from './components/Product/HookCounter';
import Product from './components/Product/Product'
import CounterClass from './components/Product/ClassCounter';
import './App.css'
import ProductList from './components/ProductList/ProductList';
//Class App.............................
class App extends React.Component{
   
    state = {
       
        count:0,
    };

    // clickHandler = (newTitle) =>{
    //     console.log("change Price");
    //     this.setState({
    //         Products : [
    //             {title:"React.js" , price:"79$"},
    //             {title:"Node.js" , price:"69$"},
    //             {title:newTitle , price:"89$"},
    //         ],
    //     })
    // };

    // constructor(props){
    //     super(props);
    //     this.countHandler=this.countHandler.bind(this);
    //     console.log("constructor",this);
    // }

    // countHandler=(id)=>{
    //     console.log("count clickesd",id );
    //     this.setState({count:this.state.count + 1});
       
    // };

    render() {
        return(
        <div className='container' id='title'>
        <h1 className='shoph1'>Shopping App</h1>
        <ProductList/>

        
        {/* <button onClick={this.clickHandler}>Change Price</button>
        <button onClick={()=>this.countHandler(2)}> 
        Counter :{this.state.count}
        </button> */}
    </div>
    );
  }
}

export default App;

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
    
    function App() {

        return(
            <div className='App'>
                <CounterClass/>
            </div>
        );

    };

    export default App;
    */