import { useAppSelector } from "./redux"

export function useAuth():boolean{
  const isUserRedux = useAppSelector((state) => state.autorization);
  const isUserLS = localStorage.getItem("autorization");
  return !!(isUserRedux && isUserLS);
}