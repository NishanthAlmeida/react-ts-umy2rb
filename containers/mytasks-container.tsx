import * as React from 'react';
import { BreadCrump } from '../component/breadcrump-component';
import { TaskDetails } from '../component/taskdetails-component'; 
export class MyTasks extends React.Component<any, any> {
  render(){
    return(
      <div className="homepage-columns mytask-container">
        <BreadCrump />
        <TaskDetails />
      </div>
    );
  }
}