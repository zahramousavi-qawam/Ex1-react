import styles from './product.module.css'
import { BiTrash} from "react-icons/bi";


const Product = (props) => {
    return (  
        <div className={styles.product} onClick={props.click}>
        <span className={styles.spanid}>ID {props.product.id}</span>
        <p>Product Name is :{props.product.title} </p>
        <p>Product Price is :{props.product.price} </p>
        <span className={styles.spanvalue  }>{props.product.quantity}</span>
        <input type="text" onChange={props.onChange} value={props.product.title} className={styles.inputtitle}></input>
        <button className={`${styles.incbtn} ${styles.btn}` } onClick={props.onIncrement}> + </button>
        <button className={`${styles.decbtn} ${styles.btn}` } onClick={props.onDecrement}>  {props.product.quantity > 1 ? "-" : <BiTrash/>} </button>
        <button className={`${styles.delbtn} ${styles.btn}` } onClick={props.onDelete}>Delete</button>
        </div>
        
      );
}
 
export default Product;