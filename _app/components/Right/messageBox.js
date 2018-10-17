import React from 'react';




export class MessageBox extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="sidebar-header">
                    <h2>Status feed</h2>
                </div>

                <div className="message-box">
                    <div className="message-box-row">
                        <b>14:55:00 - EF Generator</b> Currently down, for more details check <a href="#">here</a>.
                    </div>
                    <div className="message-box-row row-dark">
                        <b>13:30:00 - PTOT Validate and Preview Bug</b> Validate and preview is currently not
                        available cause of a bug. Orders can still be saved. Check for more details <a
                        href="#">PTOT-1601</a>.
                    </div>
                    <div className="message-box-row">
                        <b>13:00:00 - high load today</b> Today we'll run a test with more than 10000 slips, which
                        can cause high load in our system. we apologize and thank you for your understanding.
                    </div>
                    <div className="message-box-row row-dark">
                        <b>14:55:00 - EF Generator</b> Currently down, for more details check <a href="#">here</a>.
                    </div>
                    <div className="message-box-row">
                        <b>13:30:00 - PTOT Validate and Preview Bug</b> Validate and preview is currently not
                        available cause of a bug. Orders can still be saved. Check for more details <a
                        href="#">PTOT-1601</a>.
                    </div>
                    <div className="message-box-row row-dark">
                        <b>13:00:00 - high load today</b> Today we'll run a test with more than 10000 slips, which
                        can cause high load in our system. we apologize and thank you for your understanding.
                    </div>
                    <div className="message-box-row">
                        <b>14:55:00 - EF Generator</b> Currently down, for more details check <a href="#">here</a>.
                    </div>
                    <div className="message-box-row row-dark">
                        <b>13:30:00 - PTOT Validate and Preview Bug</b> Validate and preview is currently not
                        available cause of a bug. Orders can still be saved. Check for more details <a
                        href="#">PTOT-1601</a>.
                    </div>
                    <div className="message-box-row">
                        <b>13:00:00 - high load today</b> Today we'll run a test with more than 10000 slips, which
                        can cause high load in our system. we apologize and thank you for your understanding.
                    </div>
                </div>
            </div>
        )
    }
}