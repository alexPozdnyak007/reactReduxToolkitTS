import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import ProductList from "../productList/productList";
import { fetchFood } from "../../slices/foodSlice";

export default function FoodPage(){
    const {food,status,error} = useAppSelector((state) => state.foodData);
    const dispatch= useAppDispatch();
    
    //GET Data Food
     useEffect(()=>{
        dispatch(fetchFood());
     },[dispatch]);
 
    return (
        <>
        {(status==="loading") && <h6>Загрузка данных...</h6>}
        {(status==="rejected") && <h6>{error}</h6>}
        <ProductList products={food}/>
        </>
    )
}
    
