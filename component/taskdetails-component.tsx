import * as React from 'react';
import { default as TaskItems } from '../data/mock-data';
import { TaskCard } from '../component/task-cards';
import '../css/mytasks.css';
import { default as MyTaskDefaults } from '../defaults/taskcard-defaults';

function getFilteredTasks(status: string) {
  return TaskItems.HomePageData.filter((item) => (item.status === status));
}

export const statusContainer = (status: string, total: number) => {
  return (
    <div className="status-heading">
      <span>{status} </span>
      <span style={{ color: MyTaskDefaults.MyTaskDefaults.StatusColorCodes[status] }}>{total}</span>
    </div>);
}

interface ITaskDetailsProps {
  taskStatusToDisplay: string[];}
interface ITaskDetailsState {
}

export class TaskDetails extends React.Component<ITaskDetailsProps, ITaskDetailsState>{
  constructor(props: ITaskDetailsProps){
    super(props);
    this.state = { taskStatusToDisplay: this.props.taskStatusToDisplay };
  }
  render() {
    const overdueTasks = getFilteredTasks('Overdue'), overdueTaskTotal = overdueTasks.length;
    const assignedTasks = getFilteredTasks('Assigned'), assignedTaskTotal = assignedTasks.length;
    const newTasks = getFilteredTasks('New'), newTaskTotal = overdueTasks.length;
    console.log(this.state);
    return (
      <div className="mytasks-container">
        <div className="taskdetails-container">
          {statusContainer('Overdue', overdueTaskTotal)}
          <div className="taskdetails-content">
            {overdueTasks.map((r) => {
              return (<TaskCard taskDetails={r} />);
            })}
          </div>
        </div>
        <div className="taskdetails-container">
          {statusContainer('Assigned', assignedTaskTotal)}
          <div className="taskdetails-content">
            {getFilteredTasks('Assigned').map((r) => {
              return (<TaskCard taskDetails={r} />);
            })}
          </div>
        </div>
        <div className="taskdetails-container">
          {statusContainer('New', newTaskTotal)}
          <div className="taskdetails-content">
            {getFilteredTasks('New').map((r) => {
              return (<TaskCard taskDetails={r} />);
            })}
          </div>
        </div>
      </div>
    );
  }
}