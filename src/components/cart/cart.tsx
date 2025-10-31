import './style.less'
import { useState } from 'react';
import { useCart } from '../../context/cartContext'; 
import CartProductItem from './cartProductItem';


export default function Cart(){
    const [visibleSideBarCart, setVisibleSideBarCart] = useState(false);
    const {cartItems,cartCount,totalPriceCart}=useCart();


    return(
        <>
         <div className='wrapper-button-cart'>
            <div className='button-cart' onClick={() => setVisibleSideBarCart(true)}></div>
            <div className='count-cart'>{cartCount}</div>
         </div>
         <div className='side-bar-cart' data-visible={visibleSideBarCart ? 'true' : 'false'}>
            <header>
                <label className='title'>Корзина покупок</label>
                <div className='close-button' onClick={() => setVisibleSideBarCart(false)}></div>
            </header>
            <main>
                {cartCount === 0 ? (
                    <span className='not-tover'>Вы не добавили товар</span>
                ) : (
                    <div>
                        {cartItems.map(item => (
                            <CartProductItem key={item.id} props={item}/>
                        ))}
                    </div>
                )}
            </main>
            <footer>
                <div className='total'><label className='title'>Товар на сумму:</label>{totalPriceCart} руб.</div>
                <button>Оформить</button>
            </footer>
         </div>
        </>
    )
}