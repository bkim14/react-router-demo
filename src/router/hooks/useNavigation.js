import {useCallback, useContext} from "react";
import {RoutesContext} from "../Routes";

const useNavigation = ()=>{
    const {setPath} = useContext(RoutesContext);
    const navigate = useCallback((path)=>{
        if(window.location.pathname === path) return;
        window.history.pushState({},null, path);
        setPath({...window.location});
    },[setPath]);

    return navigate;

}

export default useNavigation;