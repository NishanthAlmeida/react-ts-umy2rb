import * as React from 'react';
import { default as TaskItems } from '../data/mock-data';
import { TaskCard } from '../component/task-cards';
import '../css/mytasks.css';

function getFilteredTasks(status: string) {
  return TaskItems.HomePageData.filter((item) => { return { asdasd : (item.status === status)} });
}

export const statusContainer = (status: string) => {
  return (<div>{status}</div>);
}

export class TaskDetails extends React.Component<any, any>{
  render() {
    return (
      <div className="mytasks-container">
        <div className="taskdetails-container">
          {statusContainer('Overdue')}
          {getFilteredTasks('Overdue').map((r) => {
            return (<TaskCard taskDetails={r} />);
          })}
        </div>
        <div className="taskdetails-container">
          {statusContainer('Assigned')}
          {getFilteredTasks('Assigned').map((r) => {
            return (<TaskCard taskDetails={r} />);
          })}
        </div>
        <div className="taskdetails-container">
          {statusContainer('New')}
          {getFilteredTasks('New').map((r) => {
            return (<TaskCard taskDetails={r}/>);
          })}
        </div>
      </div>
    );
  }
}