import './style.less'
import { type UnionProduct } from "../../types/types";
import { useCart } from '../../context/cartContext'; 

interface Products{
    props:UnionProduct
}
export default function CartProductItem({props}:Products){
    const {removeItemCart}=useCart();
    return(
        <>
        <div className="cart-product-item">
            <span className='title'>{props.name}</span>
            <div className="price-container">Цена:<span>{props.price}</span>Руб.</div>
            <div className="button-delete-cart-product-item" onClick={()=>{removeItemCart(props.id)}}></div>
        </div>
        </>
    )
}