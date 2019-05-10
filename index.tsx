import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {TaskCard} from './component/task-cards';
import {default as TaskItems } from './data/mock-data';

interface AppProps { }
interface AppState { }

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="taskdetails-container" onScroll={this.scrolled}>
      {TaskItems.HomePageData.map((r) => { 
        return ( <TaskCard taskDetails={r} />  );
     })}        
      </div>
    );
  }

  private scrolled = () =>{
    console.log('scrolled');
  }
}

render(<App />, document.getElementById('root'));
