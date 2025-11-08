import './style.less'
import { useState } from 'react';
import CartProductItem from './cartProductItem';
import { useCart } from '../../hooks/cart';


export default function Cart(){
    const [visibleSideBarCart, setVisibleSideBarCart] = useState(false);
    const {cartCount,getDataCart,totalPrice}=useCart();

    return(
        <>
         <div className='wrapper-button-cart'>
            <div className='button-cart' onClick={() => setVisibleSideBarCart(true)}></div>
            <div className='count-cart'>{cartCount()}</div>
         </div>
         <div className='side-bar-cart' data-visible={visibleSideBarCart ? 'true' : 'false'}>
            <header>
                <label className='title'>Корзина покупок</label>
                <div className='close-button' onClick={() => setVisibleSideBarCart(false)}></div>
            </header>
            <main>
                {cartCount() === 0 ? (
                    <span className='not-tover'>Вы не добавили товар</span>
                ) : (
                    <div>
                        {getDataCart().map(item => (
                            <CartProductItem key={item.id + item.name} product={item}/>
                        ))}
                    </div>
                )}
            </main>
            <footer>
                <div className='total'><label className='title'>Товар на сумму:</label>{totalPrice()} руб.</div>
                <button>Оформить</button>
            </footer>
         </div>
        </>
    )
}