import React from 'react';
import {MessageBox} from "./messageBox";
import {UserBox} from "./userBox";
import {NavigationBox} from "./navigationBox";




export class LeftSidebarHolder extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section>
                <aside className="left_sidebar">

                    <UserBox/>

                    <NavigationBox/>

                    <MessageBox/>

                </aside>
            </section>
        )
    }
}