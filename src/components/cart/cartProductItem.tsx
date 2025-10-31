import './style.less'
import { type FoodType, type ClothesType, type ElectronicType } from "../../types/types";
import { useCart } from '../../context/cartContext'; 

type unionProducts = FoodType | ClothesType | ElectronicType;
interface Products{
    props:unionProducts
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