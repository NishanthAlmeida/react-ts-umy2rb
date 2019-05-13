import * as React from 'react';
import { default as TaskItems } from '../data/mock-data';
import { TaskCard } from '../component/task-cards';
import '../css/mytasks.css';

function getFilteredTasks(status: string) {
  return TaskItems.HomePageData.filter((item) => (item.status === status));
}

export const statusContainer = (status: string, total: number) => {
  return (<div>{status}: {total}</div>);
}

export class TaskDetails extends React.Component<any, any>{
  render() {
    debugger;
    const overdueTasks = getFilteredTasks('Overdue'), overdueTaskTotal = overdueTasks.length;
    const assignedTasks = getFilteredTasks('Assigned'), assignedTaskTotal = assignedTasks.length;
    const newTasks = getFilteredTasks('New'), newTaskTotal = overdueTasks.length;
    return (
      <div className="mytasks-container">
        <div className="taskdetails-container">
          {statusContainer('Overdue', overdueTaskTotal)}
          {overdueTasks.map((r) => {
            return (<TaskCard taskDetails={r} />);
          })}
        </div>
        <div className="taskdetails-container">
          {statusContainer('Assigned', assignedTaskTotal)}
          {getFilteredTasks('Assigned').map((r) => {
            return (<TaskCard taskDetails={r} />);
          })}
        </div>
        <div className="taskdetails-container">
          {statusContainer('New', newTaskTotal)}
          {getFilteredTasks('New').map((r) => {
            return (<TaskCard taskDetails={r}/>);
          })}
        </div>
      </div>
    );
  }
}