import React from 'react';




export class UserBox extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="user-box">
                <div className="user-box-info transparent">
                    <b>Karsten Mikulcak</b><br/>
                    karsten.mikulcak@gmail.com
                </div>
            </div>
        )
    }
}