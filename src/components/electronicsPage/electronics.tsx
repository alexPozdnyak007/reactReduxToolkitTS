import { useAppSelector } from "../../hooks/redux";
import ProductList from "../productList/productList";


export default function Electronics(){
     const {electronic,status,error} = useAppSelector((state) => state.electronicData);
    return(
        <>
        {(status==="loading") && <h6>Загрузка данных...</h6>}
        {(status==="rejected") && <h6>{error}</h6>}
        <ProductList products={electronic}/>

        </>
    )
};