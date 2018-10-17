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

                    <div className="left_sidebar-footer">
                        <p>
                            developed by
                            <a href="https://www.spf-consulting.ch/" title="SPF Consulting">SPF Consulting</a>
                            {(new Date().getFullYear())}
                        </p>
                    </div>

                </aside>
            </section>
        )
    }
}