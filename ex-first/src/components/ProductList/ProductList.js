import React,{Component} from 'react';
import Product from '../Product/Product';
class ProductList extends Component {
    state = { 
        Products : [
            {title:"React.js" , price:"99$", id: 1 , quantity: 2},
            {title:"Node.js" , price:"89$", id: 2 ,quantity: 4},
            {title:"js" , price:"79$", id: 3 , quantity: 6},
        ],
     } 

     removeHandler =(id)=>{
       // console.log("clicked",id);
        const filterProduct = this.state.Products.filter((p)=>p.id !== id );
        this.setState({Products : filterProduct});
        console.log("this item deleted :",id);
     }

     incHandler =(id)=>{
       // console.log('inc clicked', id);
       const productts=[...this.state.Products]; 
       const selectedItem=productts.find((p)=>p.id ===id);
       selectedItem.quantity++;
      // console.log(productts);
      this.setState({productts})
     }


     changeHandler =(event,id)=>{
       // console.log(event.target.value , id);
       const productts=[...this.state.Products]; 
       const selectedItem=productts.find((p)=>p.id ===id);
       selectedItem.title=event.target.value;
      this.setState({productts})
       
     }

     decHandler=(id)=>{
       // console.log('dec' ,id);
       const productts=[...this.state.Products]; 
       const selectedItem=productts.find((p)=>p.id ===id);
       if (selectedItem.quantity===1){
        const filterProducts = productts.filter((p)=>p.id !== id);
        this.setState({productts : filterProducts });
        console.log('del' ,id);
       }else{
        selectedItem.quantity--;
        this.setState({productts});
        console.log("this Item Decrement :",id);
       }


     }
     renderProduct=()=>{
        if(this.state.Products.length===0) return(<div>There is Not Product in Your Cart</div>)

        return this.state.Products.map((product) => {
            return ( 
            <Product 
                product={product}
              //  click={()=>this.clickHandler("newTitle")}
                onDelete={()=>{this.removeHandler(product.id)}}
                onIncrement={()=>{this.incHandler(product.id)}}
                onChange={(e)=>{this.changeHandler(e, product.id)}}
                onDecrement={()=>{this.decHandler(product.id)}}
                /> 
                 );
            });
     }
    render() { 
        // return (
        //     <div>
        //         {!this.state.Products.length ? <div>Go to Shopping</div> : null}
        //     </div>
        // )
        return (
            <div> {this.renderProduct()}</div>
        );

    }
}
 
export default ProductList;