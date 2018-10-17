import React from 'react';
import {Message, Messages} from "./message";


export class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
                {
                    "date": "01.01.2018",
                    "title": "Message1",
                    "text": "lorem ipsum fatalis",
                    "link": "https://www.spf-consulting.ch/",
                    "linkTitle": "Link1"
                },
            ]
        };
    }

    render() {
        return (
            <div className="message-box-wrapper">
                <div className="sidebar-header">
                    <h3>Status Messages</h3>
                </div>

                <div className="message-box">
                    <Messages messages={this.state.data} />
                </div>
            </div>
        )
    }
}

