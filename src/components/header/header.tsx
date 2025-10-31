import { useEffect, useState } from 'react';
import './style.less';

interface HeaderProps{
    onItemClick:(attr:string|null)=>void;
}
export default function Header({onItemClick}:HeaderProps){
     const selectDefault='food';
     const [activeItem, setActiveItem]=useState<string | null>(selectDefault);

     function handleClick(e:React.MouseEvent<HTMLSpanElement>):void{
            const activeLink=e.currentTarget.getAttribute('data-name');
            setActiveItem(activeLink);
            onItemClick(activeLink);
     }

     useEffect(()=>{
        onItemClick(selectDefault);
     },[]);

    return(       
        <>
        <header>
            <div className="menu-list">
                <span data-name="food" className={activeItem === 'food' ? 'active' : ''} onClick={handleClick}>Еда</span>
                <span data-name="clothes" className={activeItem === 'clothes' ? 'active' : ''} onClick={handleClick}>Одежда</span>
                <span data-name="electronics" className={activeItem === 'electronics' ? 'active' : ''} onClick={handleClick}>Электроника</span>
            </div>
        </header>
        </>
    )
}