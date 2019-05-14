import * as React from 'react';
import { BreadCrump } from '../component/breadcrump-component';
import { TaskDetails } from '../component/taskdetails-component'; 

interface IMyTasksProps {
  taskStatusToDisplay: string[];
}

interface IMyTasksState{
}

export class MyTasks extends React.Component<IMyTasksProps, IMyTasksState> {
  constructor(props: IMyTasksProps){
    super(props);
    // this.state = { taskStatusToDisplay: };
  }
  render(){
    return(
      <div className="homepage-columns mytask-container">
        <BreadCrump />
        <TaskDetails taskStatusToDisplay={['Overdue', 'Assigned', 'New']} />
      </div>
    );
  }
}