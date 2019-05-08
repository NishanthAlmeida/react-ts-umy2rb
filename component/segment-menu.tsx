import * as React from 'react';
import { ISegmentMenuItems } from './types/segment-types';

export interface segmentMenuProps{
  menuItems: ISegmentMenuItems[];
  farItems: ISegmentMenuItems[];
}

interface segmentMenuState{
  expandFarItemMenu: boolean;
  top: string;
  left: string;
}

export class SegmentMenu extends React.Component<segmentMenuProps, segmentMenuState> {
  constructor(props: segmentMenuProps) {
    super(props);
    this.state = { expandFarItemMenu : false, top : '0px', left: '0px'};
  }

  expandMenu = (e) => {
    debugger;
    this.setState({expandFarItemMenu : (this.state.expandFarItemMenu) ? false : true, top: e.pageY, left: e.pageX});
  }

  render() {
    console.log(this.props);
    return (
      <div className="menu-widget">
      {this.props.menuItems.map((r) => {
        return (
          <span className="menus" title={r.name} onClick={r.onClick}>
            <div className={`menu-item ${r.icon}`}></div>
          </span>
        )
      })}
      <span className="menus" onClick={this.expandMenu}>
        <div className="menu-item dot-icon"></div>
      </span>
      <div className="faritems-layer-container">
      <div className="faritems-container">
      <ul className="faritem-menu" style={this.state.expandFarItemMenu ? {top: this.state.top, left: this.state.left, display:'block' } : { display: 'none' }}>
        {this.props.farItems.map((r) => {
          return (          
              <li className="faritem-menu-item">
                <span className="faritem-icon"></span>
                <span className="faritem-text">r.name</span>
              </li>
          )
        })}      
      </ul>
      </div>
      </div>
      </div>
    );
  }

}