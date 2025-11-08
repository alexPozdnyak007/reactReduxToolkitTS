import { useAppSelector,useAppDispatch } from "./redux";
import{type UnionProduct} from "../types/types";
import { addProduct,deleteProduct } from "../slices/cart";

//Кастомный хук Корзина
export const useCart=()=>{
   // Для стора
   const dispatch=useAppDispatch();
   const cartProducts= useAppSelector((state)=>state.cartReducer.cartProducts);

   // Опишем функции для корзины
  const addCarts=(product:UnionProduct)=>dispatch(addProduct(product));
  const removeItemCart=(id:number,name:string)=>dispatch(deleteProduct({id,name}));
  const totalPrice=()=>cartProducts.reduce((acc,item)=>acc+item.price,0)
  const cartCount=()=>cartProducts.length;
  const getDataCart=()=> cartProducts;
  const hasItemByID=(id:number)=>cartProducts.some(item=>item.id===id);
  const hasItemByName=(name:string)=>cartProducts.some(item=>item.name===name)


  return{addCarts,removeItemCart,totalPrice,cartCount,getDataCart,hasItemByID,hasItemByName}
}