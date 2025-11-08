import { useCart } from '../../hooks/cart';
import {type UnionProduct, type FoodType, type ClothesType, type ElectronicType} from '../../types/types'
import './style.less'

interface CardProductProps {
    product: UnionProduct;
}

export default function CardProduct({product}:CardProductProps){
    //Дистурктуризируем только основные поля
    const {name,price,id,category} =product;
    const {addCarts,hasItemByID,hasItemByName}= useCart();

    //С помощью type guards
    const hasSize=(product:UnionProduct):product is ClothesType=>'size' in product; 
    const hasColor=(product:UnionProduct):product is ClothesType=>'color' in product; 

    const hasWeight=(product:UnionProduct):product is FoodType=>'weight' in product;
    const hasSpiciness=(product:UnionProduct):product is FoodType=>'spiciness' in product;  

    const hasWBrand=(product:UnionProduct):product is ElectronicType=>'brand' in product;
    const hasInStock=(product:UnionProduct):product is ElectronicType=>'inStock' in product;  
    
    const hasItemCart:boolean= hasItemByName(name) && hasItemByID(id);

    return(
        <>
        <div className='card-product' data-id={id}>
            <label className='title'>{name}</label>
            <span className='field-category'>{category}</span>
            <div className='body-container'>
                {hasSize(product) && <div className='field'><span>Размер:</span>{product.size}</div>}
                {hasColor(product) && <div className='field'><span>Цвет:</span>{product.color}</div>}
                {hasWeight(product) && <div className='field'>{product.weight}</div>}
                {hasSpiciness(product) && <div className='field'>{product.spiciness}</div>}
                {hasWBrand(product) && <div className='field'>{product.brand}</div>}
                {hasInStock(product) && <div className='field'>{product.inStock}</div>}
            </div>
            <div className='footer-container'>
                <div className='price-container'><span>Цена: </span>{price} руб.</div>
             <button onClick={()=>{addCarts(product)}} disabled={hasItemCart}>{hasItemCart? '✓ В корзине' : 'Купить'}</button>
            </div>
        </div>
        </>
    )
}