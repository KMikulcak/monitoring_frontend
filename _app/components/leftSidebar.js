import React from 'react';




export class LeftSidebar extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <section>
                <aside className="left_sidebar">

                    <div className="user-box">
                        <div className="user-box-info transparent">
                            <b>Karsten Mikulcak</b><br/>
                            karsten.mikulcak@gmail.com
                        </div>
                    </div>

                    <div className="sidebar-header">
                        <h3>Main Navigation</h3>
                    </div>

                    <ul>
                        <li className="active"><a href="dashboard.html"><i className="fas fa-chart-line"></i> Dashboard</a>
                        </li>
                        <li><a href="listView.html"><i className="fas fa-th-list"></i>ListView</a></li>
                    </ul>

                    <div className="sidebar-header">
                        <h3>Status Messages</h3>
                    </div>

                    <div className="message-box">
                        <div className="message-box-row">
                            <b>14:55:00 - New PTOT Release!</b> Version 9.27 is live now. Check out the <a
                            href="#">releasnotes</a>
                        </div>
                        <div className="message-box-row row-dark">
                            <b>13:30:00 - PTOT Manual</b> learn <a href="#">here</a>, how to generate E2E orders!
                        </div>
                        <div className="message-box-row">
                            <b>13:00:00 - MDLT at BrainMeUp</b> If you want to learn more about MDLT, meet us on 8th of
                            October at the <a href="#">BrainMeUp</a> event.
                        </div>
                        <div className="message-box-row row-dark">
                            <b>14:55:00 - New PTOT Release!</b> Version 9.27 is live now. Check out the <a
                            href="#">releasnotes</a>
                        </div>
                        <div className="message-box-row">
                            <b>13:30:00 - PTOT Manual</b> learn <a href="#">here</a>, how to generate E2E orders!
                        </div>
                        <div className="message-box-row row-dark">
                            <b>13:00:00 - MDLT at BrainMeUp</b> If you want to learn more about MDLT, meet us on 8th of
                            October at the <a href="#">BrainMeUp</a> event.
                        </div>
                        <div className="message-box-row">
                            <b>14:55:00 - New PTOT Release!</b> Version 9.27 is live now. Check out the <a
                            href="#">releasnotes</a>
                        </div>
                        <div className="message-box-row row-dark">
                            <b>13:30:00 - PTOT Manual</b> learn <a href="#">here</a>, how to generate E2E orders!
                        </div>
                        <div className="message-box-row">
                            <b>13:00:00 - MDLT at BrainMeUp</b> If you want to learn more about MDLT, meet us on 8th of
                            October at the <a href="#">BrainMeUp</a> event.
                        </div>
                        <div className="message-box-row row-dark">
                            <b>14:55:00 - New PTOT Release!</b> Version 9.27 is live now. Check out the <a
                            href="#">releasnotes</a>
                        </div>
                        <div className="message-box-row">
                            <b>13:30:00 - PTOT Manual</b> learn <a href="#">here</a>, how to generate E2E orders!
                        </div>
                        <div className="message-box-row row-dark">
                            <b>13:00:00 - MDLT at BrainMeUp</b> If you want to learn more about MDLT, meet us on 8th of
                            October at the <a href="#">BrainMeUp</a> event.
                        </div>
                    </div>
                </aside>
            </section>
        )
    }
}