
import { useCart } from '../../context/cartContext';
import {type FoodType, type ClothesType, type ElectronicType} from '../../types/types'
import './style.less'

type Product = FoodType|ClothesType|ElectronicType;

interface CardProductProps {
    props: Product;
}

export default function CardProduct({props}:CardProductProps){
    const {name, price,id,size,color,category,weight,spiciness,brand,inStock}=props as any;
    const {addToCart,hasItemCart}=useCart();
    const handlerClick=function(){
        addToCart(props);
    }
    return(
        <>
        <div className='card-product' data-id={id}>
            <label className='title'>{name}</label>
            <span className='field-category'>{category}</span>
            <div className='body-container'>
                {size && <div className='field'><span>Размер:</span>{size}</div>}
                {color && <div className='field'><span>Цвет:</span>{color}</div>}
                {weight && <div className='field'>{weight}</div>}
                {spiciness && <div className='field'>{spiciness}</div>}
                {brand && <div className='field'>{brand}</div>}
                {inStock && <div className='field'>{inStock}</div>}
            </div>
            <div className='footer-container'>
                <div className='price-container'><span>Цена: </span>{price} руб.</div>
                <button onClick={()=>handlerClick()} disabled={hasItemCart(props.id)? true:false} >{hasItemCart(props.id) ? '✓ В корзине' : 'Купить'}</button>
            </div>
        </div>
        </>
    )
}