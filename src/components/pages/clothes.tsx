import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import ProductList from "../productList/productList";
import { fetchClothes } from "../../slices/clothesSlice";

export default function ClothesPage(){
    const {clothes,status,error} = useAppSelector((state) => state.clothesData);
    const dispatch= useAppDispatch();
    useEffect(()=>{
        dispatch(fetchClothes());
    },[dispatch]);
    return(
        <>
         {(status==="loading") && <h6>Загрузка данных...</h6>}
         {(status==="rejected") && <h6>{error}</h6>}
         <ProductList products={clothes}/>
        </>
    )
}