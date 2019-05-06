import * as React from 'react';
import { SegmentMenu } from './segment-menu';

export class TaskCards extends React.Component {
    constructor(props: []) {
        super(props);
    }
    render() {
        return (
            <div className="task-card">
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
                        <span></span>
                        <span>3 Days ago</span>
                    </div>
                    <div className="item-details">
                        <span></span>
                        <span>3 Days ago</span>
                    </div>
                </div>

                <div className="metadata-details">
                    <div className="metadata-items">
                        <div>Region:</div>
                        <div>EMEA</div>
                    </div>
                    <div className="metadata-items">
                        <div>Region:</div>
                        <div>EMEA</div>
                    </div>
                    <div className="metadata-items">
                        <div>Region:</div>
                        <div>EMEA</div>
                    </div>
                    <div className="metadata-items">
                        <div>Region:</div>
                        <div>EMEA</div>
                    </div>
                    <div className="metadata-items">
                        <div>Region:</div>
                        <div>EMEA</div>
                    </div>
                </div>
            </div>
        );
    }
}