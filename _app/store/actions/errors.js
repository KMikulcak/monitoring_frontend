



export const errorAction = (type,message)=>{
    return{
        type,
        message
    };
}


export const networkError = (type,code, message)=>{
    return{
        ...errorAction(type, message),
        code
    }
}
