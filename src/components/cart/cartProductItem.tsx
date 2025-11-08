import './style.less'
import { type UnionProduct } from "../../types/types";
import { useCart } from '../../hooks/cart';


interface Products{
    product:UnionProduct
}
export default function CartProductItem({product}:Products){
    const {removeItemCart}=useCart();
    return(
        <>
        <div className="cart-product-item">
            <span className='title'>{product.name}</span>
            <div className="price-container">Цена:<span>{product.price}</span>Руб.</div>
            <div className="button-delete-cart-product-item" onClick={()=>{removeItemCart(product.id, product.name)}}></div>
        </div>
        </>
    )
}