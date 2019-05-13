import * as React from 'react';
import { BreadCrump } from '../component/breadcrump-component';
import { TaskDetails } from '../component/taskdetails-component'; 

interface IMyTasksProps {

}

interface IMyTasksState{
  
}

export class MyTasks extends React.Component<IMyTasksProps, IMyTasksState> {
  render(){
    return(
      <div className="homepage-columns mytask-container">
        <BreadCrump />
        <TaskDetails />
      </div>
    );
  }
}