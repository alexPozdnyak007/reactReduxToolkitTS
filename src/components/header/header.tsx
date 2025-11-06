import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.less';


type appRoute='food'|'clothes'|'electronics';
const routes: appRoute[] = ['food', 'clothes', 'electronics'];
const default_route: appRoute = 'food';

export default function Header(){   
     const location =useLocation();
     const navigate=useNavigate();
     //GET category from url 
     const activeLink=location.pathname.slice(1) as appRoute;
     const [activeItem, setActiveItem]=useState<appRoute>(
        routes.includes(activeLink)?activeLink:default_route
     );

     function handleClick(e:React.MouseEvent<HTMLSpanElement>):void{
         const route = e.currentTarget.getAttribute('data-name') as appRoute;
         if(routes.includes(route)){
            navigate("/"+route);
         }
        
     }

     useEffect(()=>{
        if(routes.includes(activeLink)){
            setActiveItem(activeLink);
        }
       
     },[location]);

    return(       
        <>
        <header>
            <div className="menu-list">
                {routes.map(route=>(
                    <span 
                    key={route}
                    data-name={route} 
                    className={activeItem === route ? 'active' : ''} 
                    onClick={handleClick}>
                        {route === 'food' && 'Еда'}
                        {route === 'clothes' && 'Одежда'}
                        {route === 'electronics' && 'Электроника'}
                    </span>
                ) )}

            </div>
        </header>
        </>
    )
}