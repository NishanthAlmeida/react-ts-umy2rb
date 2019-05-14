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
      <span style={{ color: MyTaskDefaults.MyTaskDefaults.StatusColorCodes[status] }}>{total}</span>
    </div>);
}

interface ITaskDetailsProps {
  taskStatusToDisplay: string[];
  callBack: (workItemID: string) => any;
}
interface ITaskDetailsState {
  taskStatuses: string[];
}

export class TaskDetails extends React.Component<ITaskDetailsProps, ITaskDetailsState>{
  constructor(props: ITaskDetailsProps){
    super(props);
    this.state = { taskStatuses: this.props.taskStatusToDisplay };
  }
  render() {
    console.log(this.state);
    return (
      <div className="mytasks-container">

        {this.state.taskStatuses.map((item) => {
        const Tasks = getFilteredTasks(item), TaskTotal = Tasks.length;
        return (
          <div className="taskdetails-container">
          {statusContainer(item, TaskTotal)}
          <div className="taskdetails-content">
            {Tasks.map((r) => {
              return (<TaskCard taskDetails={r} />);
            })}
          </div>
        </div>
        );
        })}

        <div className="displaytask-container">
          
        </div>

      </div>
    );
  }
}