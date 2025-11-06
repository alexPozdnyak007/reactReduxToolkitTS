import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import ProductList from "../productList/productList";
import { useEffect } from "react";
import { fetchElectonic } from "../../slices/electronicSlice";


export default function ElectronicsPage(){
     const {electronic,status,error} = useAppSelector((state) => state.electronicData);
     const dispatch= useAppDispatch();

     useEffect(()=>{
        dispatch(fetchElectonic());
     },[dispatch]);

    return(
        <>
        {(status==="loading") && <h6>Загрузка данных...</h6>}
        {(status==="rejected") && <h6>{error}</h6>}
        <ProductList products={electronic}/>

        </>
    )
};