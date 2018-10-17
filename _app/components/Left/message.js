import React from 'react';




export class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="message-box-row">
                <b>{this.props.date} - {this.props.title}</b>
                <div>
                    <p>{this.props.text}</p>
                    {this.props.link ?
                        <a href={this.props.link}>{this.props.linkTitle}</a>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

export const Messages = ({messages}) => (
    <div>
        {messages.map((item, index)=> (
            <Message
                key={`row_${index}`}
                date={item.date}
                title={item.title}
                text={item.text}
                link={item.link}
                linkTitle={item.linkTitle}
            />
        ))}
    </div>
);