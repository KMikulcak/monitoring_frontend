import React from 'react';




export class Messages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="message-box-row">
                <b>{this.props.date} - {this.props.title}</b>$
                <p>
                    {this.props.text}
                    {this.props.link ?
                        <a href={this.props.link}>{this.props.linkTitle}</a>
                        :
                        null
                    }
                </p>
            </div>
        )
    }
}