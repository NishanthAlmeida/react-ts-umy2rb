import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavBar } from '../containers/navbar-container';
import { MyTasks } from '../containers/mytasks-container';
import '../css/home-page.css';

export class HomePage extends React.Component<any, any>{
  render(){
    return(
      <div className="homepage-container">
        <NavBar />
        <MyTasks />
      </div>
    );
  }
}