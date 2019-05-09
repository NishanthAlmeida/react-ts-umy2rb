import * as React from 'react';
import { SegmentMenu } from './segment-menu';
import {default as TaskItems } from '../data/mock-data';
import { ISegmentMenuItems, ITaskDetails } from '../types/segment-types';
import { MetaDataDetails } from './metadata-component';

interface AppProps{
  taskDetails: ITaskDetails;
 }

interface AppState{ containerExpanded: boolean; }
 
export class TaskCards extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { containerExpanded : true};
    }

    slideTaskDetails = (event) => {
      this.setState({containerExpanded: (this.state.containerExpanded) ? false : true});
    }

    prepareSegmentMenuItems(){
      return [
        {
          key: 'process-viewer',
          name: 'process-viewer',
          icon: 'process-icon',
          onClick: (e) => {
            alert('click');
          }
        },
        {
          key: 'open-form',
          name: 'open-form',
          icon: 'openform-icon',
          onClick: (e) => {
            alert('click');
          }
        },
        {
          key:'change-flow',
          name: 'Change Flow',
          icon: 'changeflow-icon',
          onclick: (e) => {
            alert('change flow');
          }
        }
      ];
    }

    prepareFarItems(){
      return [{
          key:'release-to-queue',
          name: 'Release to Queue',
          icon: 'release-to-queue-icon',
          onclick: (e) => {
            alert('change flow');
          }
        },
        {
          key:'rework',
          name: 'Rework',
          icon: 'rework-icon',
          onclick: (e) => {
            alert('change flow');
          }
        },
        {
          key:'create-worked-item',
          name: 'Create Linked Worked Item',
          icon: 'create-worked-item-icon',
          onclick: (e) => {
            alert('change flow');
          }
        },
        {
          key:'change-priority',
          name: 'Change Priority',
          icon: 'change-priority-icon',
          onclick: (e) => {
            alert('change flow');
          }
        },
        {
          key:'cancel-process',
          name: 'Cancel Process',
          icon: 'cancel-process-icon',
          onclick: (e) => {
            alert('change flow');
          }
        },
        {
          key:'view-description',
          name: 'View Description',
          icon: 'view-description-icon',
          onclick: (e) => {
            alert('change flow');
          }
        }];
    }
 
    render() {
        return (
            <div className="task-card" style={{ height: this.state.containerExpanded ? '200px' : '400px'}}>
                <SegmentMenu menuItems={this.prepareSegmentMenuItems()} farItems={this.prepareFarItems()} />

                <div className="processname">
                    {this.props.taskDetails.applicationName}
                </div>
                <div className="appname">
                    {this.props.taskDetails.processName}
                </div>

                <div className="priority">
                    <span>Priority: </span> {this.props.taskDetails.priority}
                </div>

                <div className="time-details">
                    <div className="item-details">
                        <span><img src="https://cdn.jsdelivr.net/gh/NishanthAlmeida/react-ts-umy2rb@master/images/processstarted.png" /></span>
                        <span>{this.props.taskDetails.timeDetails.processtarted}</span>
                    </div>
                    <div className="item-details right-align">
                        <span><img src="https://cdn.jsdelivr.net/gh/NishanthAlmeida/react-ts-umy2rb@master/images/processtime.png" /></span>
                        <span>{this.props.taskDetails.timeDetails.dueDays}</span>
                    </div>
                </div>

                <MetaDataDetails metaDataItems={this.props.taskDetails.metaDataDetails} />

               
                <div className={`slideButton ${this.state.containerExpanded ? 'slideout' : 'slidein'}`} onClick={this.slideTaskDetails}>
                </div>
            </div>
        );
    }
}