import { useAppSelector } from '../hooks/redux.ts';

export function CheckIsUser():boolean{
        /*1. Прочитать с Redux */
        let checked=false;
        const isUserRedux = useAppSelector((state) => state.autorization);
        //2. Прочитать с localStorage
        const isUserLS = localStorage.getItem("autorization");
         (isUserRedux && isUserLS )?
         checked=true:
         checked=false;
        return checked;
}

