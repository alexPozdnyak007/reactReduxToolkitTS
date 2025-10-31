import { useEffect, useState } from "react"
import Header from "../header/header"
import FoodData from "../foodPage/food";
import Clothes from "../clothesPage/clothes";
import Electronics from "../electronicsPage/electronics";
import { fetchFood } from "../../slices/foodSlice";
import { fetchElectonic } from "../../slices/electronicSlice";
import { fetchClothes } from "../../slices/clothesSlice";
import { useAppDispatch } from "../../hooks/redux";
import Cart from "../cart/cart";
import { CartProvider } from "../../context/cartContext";





export default function HomePage(){
    const dispatch= useAppDispatch();

    useEffect(function(){
        dispatch(fetchFood());
        dispatch(fetchElectonic());
        dispatch(fetchClothes());
    },[dispatch]);


    const [activeLink, setActiveLink]= useState<string|null>(null);

    return(
        <>
        <CartProvider>
            <Cart/>
        <Header onItemClick={setActiveLink}/>
        <main>
            {activeLink === "food" && <FoodData />}
            {activeLink==="clothes" && <Clothes/>} 
            {activeLink==="electronics" && <Electronics/>}  
        </main>
        </CartProvider>
        
        </>
    )

}