import React from "react";
import {useMemo} from "react";
import {matchPath, removePrecedingPaths} from "./utils/urlUtils";
import PropTypes from "prop-types";

const Route = ({element, nextUrl, children})=>{
    console.log(nextUrl);
    const showChildren = useMemo(()=>{
        console.log(nextUrl);
        if(!nextUrl) return null;
        if(Array.isArray(children)){
            const ret = children.find((child)=>{return matchPath(nextUrl, child.props.path)});
            if(!ret) return null;
            const nextUrlForChild = removePrecedingPaths(nextUrl, ret.props.path);
            return {...ret, props:{...ret.props, nextUrl:nextUrlForChild}};
        }else{
            return children;
        }
    },[children, nextUrl])

    return <>{element}{showChildren}</>;

}

Route.defaultProps = {
    element:<></>,
    nextUrl:'',
    children:<></>
}

Route.propTypes = {
    element: PropTypes.element,
    nextUrl: PropTypes.string,
    children: PropTypes.element || PropTypes.arrayOf(PropTypes.element),
}

export default Route