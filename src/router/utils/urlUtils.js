const matchPath = function(url, elementUrl) {
    const urlPaths = url.split('/');
    const elementUrlPaths = elementUrl.split('/');

    if(elementUrlPaths.length>urlPaths.length) return false;

    return elementUrlPaths.every((path,idx)=> urlPaths[idx]===path);
}

const removePrecedingPaths = function(url, elementUrl){
    const urlPaths = url.split('/');
    const elementUrlPaths = elementUrl.split('/');

    if(elementUrlPaths.length>urlPaths.length) return false;

    return urlPaths.reduce((acc, path, idx)=>{
        if(idx >= elementUrlPaths.length) return [...acc, path];
        if(elementUrlPaths[idx]===path){
            return acc;
        }
        return acc;
    },[]).reduce((acc,path)=>{return acc.concat('/').concat(path);},'');

}

export {matchPath, removePrecedingPaths}