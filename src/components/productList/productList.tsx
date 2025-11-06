import { useState,useMemo, useEffect } from "react"
import {type UnionProduct} from '../../types/types'
import {type SearchParams} from '../../types/router'
import CardProduct from "../cardProduct/cardProduct"
import './style.less'
import { useSearchParams } from "react-router-dom";


//Типизируем массив с товароми

interface ProductListProps {
  products: UnionProduct[];
}

export default function ProductList({products}:ProductListProps){
   const [currentPage,setCurrentPage] = useState<SearchParams['page']>(1);
   const [sortType,setSortType]=useState<SearchParams['filter']>('default');
   const [searchParams, setSearchParams] = useSearchParams();

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
    
   function handleClickPage(numPage:SearchParams['page']):void{
     const numberPage=numPage; //наш номер страницы
     const params = new URLSearchParams(searchParams);
     params.set('page', numberPage.toString());
     setSearchParams(params);
     setCurrentPage(numberPage);
   }

   function handleClickFilter(filter:SearchParams['filter']):void{
    const curentFilter=filter;
    const params = new URLSearchParams(searchParams);
    params.set('filter', curentFilter);
    setSearchParams(params);
    setSortType(curentFilter);
   }

   //read params
   useEffect(()=>{
    const pageFromUrl = searchParams.get('page');
    const pageNumber = pageFromUrl ?parseInt(pageFromUrl) : 1;
   
    const isValidFilter=(value:string|null):value is SearchParams['filter'] => {
        return value !== null && ['name', 'price', 'default'].includes(value);
    }
    const filterFromUrl=searchParams.get('filter');
    const filter = isValidFilter(filterFromUrl) ? filterFromUrl : 'default';
    
    
    if (!pageFromUrl||!filterFromUrl) {
        const params = new URLSearchParams(searchParams);
        if (!pageFromUrl) params.set('page', '1');
        if (!filterFromUrl) params.set('filter', 'default');
        setSearchParams(params);
    }

    setSortType(filter);
    setCurrentPage(pageNumber);
    
   },[searchParams]);

   // Массив со страницами 
   const pagesNumber=[];
   for(let i=1; i<=totalPages; i++){
    pagesNumber.push(i);
   }

    return(
        <>
        <div className="productsList">
            <div className="sort-container">
                <div className={sortType === 'name' ? 'active' : ''} onClick={()=>handleClickFilter('name')}>Наименование</div>
                <div className={sortType === 'price' ? 'active' : ''} onClick={()=>handleClickFilter('price')}>Цена</div>
            </div>
            <div className="list">
               {currentProducts.map(product => (
                <CardProduct key={product.id} product={product}></CardProduct>
                ))}
            </div>
            <div className="pagination">
                {pagesNumber.map(number => (
                    <button  key={number} onClick={() => handleClickPage(number)} className={number === currentPage ? 'active' : ''} >
                {number}
          </button>
        ))}
            </div>
        </div>
       
        </>
    )
}