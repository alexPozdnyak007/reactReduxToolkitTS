import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type FoodType, type ClothesType, type ElectronicType } from "../types/types";

type unionProducts = FoodType | ClothesType | ElectronicType;

interface cartContextType{
    cartItems:unionProducts[],
    addToCart:(product:unionProducts)=> void,
    totalPriceCart:number,
    removeItemCart:(id:number)=>void,
    hasItemCart:(id:number)=> boolean,
    cartCount:number
}

//Создадим контекст (общую корзину)
const СartContext=createContext<cartContextType|null>(null);

export function CartProvider({children}:{children:ReactNode}){
    const [cartItems,setCartItems]=useState<unionProducts[]>([]);

    //Функция добавления в корзину
    const addToCart=useCallback((product:unionProducts)=>{
      setCartItems(prev => {
      if (prev.some(item => item.id === product.id)) {
        return prev; // Защита от дубликатов
      }
      return [...prev, product];
    });
    },[]);
    
    const removeItemCart=(id:number)=>{
        setCartItems(prev => prev.filter(item => item.id !== id));
    }
    const totalPriceCart= cartItems.reduce((acc, item) => acc + item.price, 0);

    const cartCount = cartItems.length;
    
    const hasItemCart=(id:number)=>cartItems.some(item=>item.id===id);
    //Передадим в контекст
    const value = {
    cartItems,
    addToCart,
    totalPriceCart,
    removeItemCart,
    hasItemCart,
    cartCount
  };
  return (
    <СartContext.Provider value={value}>
      {children}
    </СartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(СartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}




