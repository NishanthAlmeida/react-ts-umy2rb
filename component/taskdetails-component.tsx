import * as React from 'react';
import { default as TaskItems } from '../data/mock-data';
import { TaskCard } from '../component/task-cards';
import '../css/mytasks.css';
import { default as MyTaskDefaults } from '../defaults/taskcard-defaults';

function getFilteredTasks(status: string) {
  return (status === 'All') ? TaskItems.HomePageData : TaskItems.HomePageData.filter((item) => (item.status === status));
}

export const statusContainer = (status: string, total: number) => {
  return (
    <div className="status-heading">
      <span>{status} </span>
      <span className="status-count" style={{ color: MyTaskDefaults.MyTaskDefaults.StatusColorCodes[status] }}>{total}</span>
    </div>);
}

interface ITaskDetailsProps {
  taskStatusToDisplay: string[];
  opentask?: (e: any) => void;
}
interface ITaskDetailsState {
  taskStatuses: string[];
  taskId: String;
}

export class TaskDetails extends React.Component<ITaskDetailsProps, ITaskDetailsState>{
  constructor(props: ITaskDetailsProps) {
    super(props);
    this.state = { taskStatuses: this.props.taskStatusToDisplay, taskId: "" };
  }

  private onClickTask = (WID: string) => {
    console.log(WID);
    this.setState({ taskStatuses: ['All'], taskId: WID });
  }

  render() {
    return (
      <div className="mytasks-container animated zoomIn delay-1s">
        {this.state.taskStatuses.map((item) => {
          const Tasks = getFilteredTasks(item), TaskTotal = Tasks.length;
          return (
            <div className="taskdetails-container">
              {statusContainer(item, TaskTotal)}
              <div className="taskdetails-content">
                {Tasks.map((r) => {
                  return (<TaskCard taskDetails={r} opentask={this.onClickTask} />);
                })}
              </div>
            </div>
          );
        })}
        {this.state.taskStatuses.length === 1 ?
          <div className="displaytask-container animated slideInLeft delay-1s">
            <div className="icon-container">
              <div className="button-close" onClick={() => this.setState({taskStatuses: ['Overdue', 'Assigned', 'New']})}>✕</div>
            </div>
            <div>
              {this.state.taskId}
            </div>
          </div>
          : null
        }


      </div>
    );
  }
}