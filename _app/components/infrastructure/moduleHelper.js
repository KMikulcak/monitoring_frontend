export const module = {
    MONITORING: Symbol(1),
    MDLT: Symbol(2),
    PTOT: Symbol(3),
    ROOT: Symbol(4)
}


export const getModule = (pathname)=>{
    const route = pathname.split("/")[1];
    switch(route){
        case "monitoring":
            return module.MONITORING;
        case "mdlt":
            return module.MDLT;
        case "ptot":
            return module.PTOT;
        default:
            return module.ROOT;
    }
}
