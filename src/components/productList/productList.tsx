import { useState,useMemo } from "react"
import {type FoodType, type ClothesType, type ElectronicType} from '../../types/types'
import CardProduct from "../cardProduct/cardProduct"
import './style.less'


//Типизируем массив с товароми
type productType=FoodType|ClothesType|ElectronicType;

interface ProductListProps {
  products: productType[];
}

export default function ProductList({products}:ProductListProps){
   const [currentPage,setCurrentPage] = useState(1);
   const [sortType,setSortType]=useState<'default'|'price'|'name'>('default');

   //Фу-ия сортировки
   const sortedProducts=useMemo(()=>{
        const productsCopy=[...products];
           if (sortType === 'price') {
               return productsCopy.sort((a, b) => a.price - b.price);
           } else if (sortType === 'name') {
               return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
           }

           return productsCopy;
           
       },[products,sortType]);

   const itemsCount=5;

   const totalPages= Math.ceil(products.length/itemsCount); //кол-во страниц
   const startIndex= (currentPage-1)*itemsCount;// с какой страницы начать 
   const currentProducts= sortedProducts.slice(startIndex, startIndex+ itemsCount)  //Сами элементы по частям


   // Массив со страницами 
   const pagesNumber=[];
   for(let i=1; i<=totalPages; i++){
    pagesNumber.push(i);
   }

    return(
        <>
        <div className="productsList">
            <div className="sort-container">
                <div className={sortType === 'name' ? 'active' : ''} onClick={()=>setSortType('name')}>Наименование</div>
                <div className={sortType === 'price' ? 'active' : ''} onClick={()=>setSortType('price')}>Цена</div>
            </div>
            <div className="list">
               {currentProducts.map(product => (
                <CardProduct key={product.id} props={product}></CardProduct>
                ))}
            </div>
            <div className="pagination">
                {pagesNumber.map(number => (
                    <button  key={number} onClick={() => setCurrentPage(number)} className={number === currentPage ? 'active' : ''} >
                {number}
          </button>
        ))}
            </div>
        </div>
       
        </>
    )
}