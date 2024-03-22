import React, {createContext, useEffect, useMemo, useState} from "react";
import {matchPath, removePrecedingPaths} from "./utils/urlUtils";

export const RoutesContext = createContext({
})
const Routes = ({children})=>{

    const [path, setPath] = useState({...window.location});

    useEffect(()=>{
        window.addEventListener('popstate',()=>{
            setPath({...window.location});
        });
        return window.removeEventListener('popstate',()=>{
            setPath({...window.location});
        });
    },[]);



    const showChildren = useMemo(()=>{
        if(Array.isArray(children)){
            const ret = children.find((child)=>{return matchPath(path.pathname, child.props.path)});
            const nextUrl = removePrecedingPaths(path.pathname, ret.props.path);
            console.log(nextUrl);
            return {...ret, props:{...ret.props, nextUrl}};
        }else{
            return children;
        }
    },[children, path])

    return <RoutesContext.Provider value={{path, setPath}}>
        {showChildren}
    </RoutesContext.Provider>;
}

export default Routes;