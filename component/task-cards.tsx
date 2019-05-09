import * as React from 'react';
import { SegmentMenu } from './segment-menu';
import { default as TaskItems } from '../data/mock-data';
import { ISegmentMenuItems, ITaskDetails } from '../types/segment-types';
import { MetaDataDetails } from './metadata-component';
import { default as TaskCardDefault } from '../defaults/taskcard-defaults';

interface TaskCardProps {
  taskDetails: ITaskDetails;
}

interface TaskCardState { containerExpanded: boolean; }

export const renderheaders = (applicationName: string, processName: string) => {
  return (
    <React.Fragment>
      <div className="processname">{applicationName}</div>
      <div className="appname">{processName}</div>
    </React.Fragment>
  )
}

export const renderProcessData = () => {

}

export class TaskCard extends React.Component<TaskCardProps, TaskCardState> {
  constructor(props: TaskCardProps) {
    super(props);
    this.state = { containerExpanded: true };
  }

  slideTaskDetails = (event) => {
    this.setState({ containerExpanded: (this.state.containerExpanded) ? false : true });
  }

  prepareSegmentMenuItems(): ISegmentMenuItems[] {
    return [
      {
        key: 'process-viewer',
        name: 'process-viewer',
        icon: 'process-icon',
        onClick: (e: any) => {
          alert('Prcoess Viewer Click');
        }
      },
      {
        key: 'open-form',
        name: 'open-form',
        icon: 'openform-icon',
        onClick: (e: any) => {
          alert('Open Form Click');
        }
      },
      {
        key: 'change-flow',
        name: 'Change Flow',
        icon: 'changeflow-icon',
        onClick: (e: any) => {
          alert('Change flow Click');
        }
      }
    ];
  }

  prepareFarItems(): ISegmentMenuItems[] {
    return [{
      key: 'release-to-queue',
      name: 'Release to Queue',
      icon: 'release-to-queue-icon',
      onClick: (e: any) => {
        alert('Release to queue click');
      }
    },
    {
      key: 'rework',
      name: 'Rework',
      icon: 'rework-icon',
      onClick: (e: any) => {
        alert('Re work');
      }
    },
    {
      key: 'create-worked-item',
      name: 'Create Linked Worked Item',
      icon: 'create-worked-item-icon',
      onClick: (e: any) => {
        alert('Create worked item click');
      }
    },
    {
      key: 'change-priority',
      name: 'Change Priority',
      icon: 'change-priority-icon',
      onClick: (e: any) => {
        alert('Change priority click');
      }
    },
    {
      key: 'cancel-process',
      name: 'Cancel Process',
      icon: 'cancel-process-icon',
      onClick: (e: any) => {
        alert('Cancel process click');
      }
    },
    {
      key: 'view-description',
      name: 'View Description',
      icon: 'view-description-icon',
      onClick: (e: any) => {
        alert('View description click');
      }
    }];
  }

  render() {
    return (
      <div className="task-card" style={{ height: this.state.containerExpanded ? TaskCardDefault.TaskCardDefaultValues.cardHeight : TaskCardDefault.TaskCardDefaultValues.cardExpandedHeight }}>
        <SegmentMenu menuItems={this.prepareSegmentMenuItems()} farItems={this.prepareFarItems()} />

      {renderheaders(this.props.taskDetails.applicationName, this.props.taskDetails.processName)}

        <div className="priority">
          <span>Priority: </span> {this.props.taskDetails.priority}
        </div>

        <div className="time-details">
          <div className="item-details">
            <span><img src="https://cdn.jsdelivr.net/gh/NishanthAlmeida/react-ts-umy2rb@master/images/processstarted.png" /></span>
            <span>{this.props.taskDetails.timeDetails.procesStarted}</span>
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