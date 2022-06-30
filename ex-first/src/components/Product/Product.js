const Product = (props) => {
    return (  
        <div>
        <p>Product Name is :{props.name} </p>
        <p>Product Price is :{props.price} </p>
        {props.children}
        </div>
        
      );
}
 
export default Product;