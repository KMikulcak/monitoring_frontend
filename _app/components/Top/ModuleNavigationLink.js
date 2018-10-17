import React from 'react';
import {withHistoryContext} from "../../app";
import {getModule} from "../infrastructure/moduleHelper";





const _ModuleNavigationLink = (props)=>{
    console.log(props);
    const module = getModule(props.history.location.pathname);
    const locationModule = getModule(props.to);
    const matches = module === locationModule;
    return(
        <a
            href={props.to}
            className={matches ? 'header-title-selected' : 'header-title'}
        >
            {props.title}
        </a>
    )
}


export const ModuleNavigationLink = withHistoryContext(_ModuleNavigationLink);








