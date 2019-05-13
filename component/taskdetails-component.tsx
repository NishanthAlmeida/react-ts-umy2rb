import * as React from 'react';
import { default as TaskItems } from '../data/mock-data';
import { TaskCard } from '../component/task-cards';
import '../css/mytasks.css';

function getFilteredTasks(status: string) {
  return TaskItems.HomePageData.filter((item) => (item.status === status));
}

export class TaskDetails extends React.Component<any, any>{
  render() {
    return (
      <div className="mytasks-container">
        <div className="taskdetails-container">
          {getFilteredTasks('Overdue').map((r) => {
            return (<TaskCard taskDetails={r} />);
          })}
        </div>
        <div className="taskdetails-container">
          {getFilteredTasks('Assigned').map((r) => {
            return (<TaskCard taskDetails={r} />);
          })}
        </div>
        <div className="taskdetails-container">
          {getFilteredTasks('New').map((r) => {
            return (<TaskCard taskDetails={r} />);
          })}
        </div>
      </div>
    );
  }
}