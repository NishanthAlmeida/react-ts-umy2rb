import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {TaskCard} from './component/task-cards';
import {default as TaskItems } from './data/mock-data';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="taskdetails-container" >
      {TaskItems.HomePageData.map((r) => { 
        console.log(r);
        return ( <TaskCard taskDetails={r} />  );
         
     })}
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
