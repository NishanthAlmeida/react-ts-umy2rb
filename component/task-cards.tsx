import * as React from 'react';
import { SegmentMenu } from './segment-menu';
import {default as TaskItems } from './data/mock-data';

interface AppProps{ }
interface AppState{ contentHeight: string; }

export class TaskCards extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { contentHeight : '200px'};
    }

    slideTaskDetails = (event) => {
      this.setState({contentHeight: this.state.contentHeight === "400px" ? "200px" : "400px"});
    }

    render() {
        return (
            <div className="task-card" style={{ height: this.state.contentHeight}}>
                <SegmentMenu />
                <div className="processname">
                    Finance Manage Approval
                </div>
                <div className="appname">
                    Finance Process
                </div>

                <div className="priority">
                    <span>Priority: </span> High
                </div>

                <div className="time-details">
                    <div className="item-details">
                        <span><img src="./img1.PNG" /></span>
                        <span>3 Days ago</span>
                    </div>
                    <div className="item-details">
                        <span><img src="./img1.PNG" /></span>
                        <span>3 Days ago</span>
                    </div>
                </div>

                <div className="metadata-details">
                    <div className="metadata-items">
                        <div className="item-header">Region:</div>
                        <div className="item-data">EMEA</div>
                    </div>
                    <div className="metadata-items">
                        <div className="item-header">Amount:</div>
                        <div className="item-data">1400</div>
                    </div>
                    <div className="metadata-items">
                        <div className="item-header">Department:</div>
                        <div className="item-data">Procurement</div>
                    </div>
                    <div className="metadata-items">
                        <div className="item-header">Vendor:</div>
                        <div className="item-data">AgilePoint INC</div>
                    </div>
                    <div className="metadata-items">
                        <div className="item-header">Product:</div>
                        <div className="item-data">Agile Point NX 7.0</div>
                    </div>
                    <div className="metadata-items">
                        <div className="item-header">Requested By:</div>
                        <div className="item-data">Jane Doe</div>
                    </div>
                    <div className="metadata-items">
                        <div className="item-header">Requested Date:</div>
                        <div className="item-data">12/03/2019</div>
                    </div>
                </div>
                  <div className="slidButton" onClick={this.slideTaskDetails}>^</div>
            </div>
        );
    }
}