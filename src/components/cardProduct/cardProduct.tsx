
import { useCart } from '../../context/cartContext';
import {type UnionProduct} from '../../types/types'
import './style.less'


interface CardProductProps {
    product: UnionProduct;
}

export default function CardProduct({product}:CardProductProps){
    const {name, price,id,size,color,category,weight,spiciness,brand,inStock}=product as any;
    const {addToCart,hasItemCart}=useCart();
    const handlerClick=function(){
        addToCart(product);
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
                <button onClick={()=>handlerClick()} disabled={hasItemCart(product.id)? true:false} >{hasItemCart(product.id) ? '✓ В корзине' : 'Купить'}</button>
            </div>
        </div>
        </>
    )
}