import * as React from 'react';
import { ISegmentMenuItems } from './types/segment-types';

export interface segmentMenuProps{
  menuItems: ISegmentMenuItems[];
  farItems: ISegmentMenuItems[];
}

interface segmentMenuState{
  expandMenu: boolean;
}

export class SegmentMenu extends React.Component<segmentMenuProps, segmentMenuState> {
  constructor(props: segmentMenuProps) {
    super(props);
    this.state = { expandMenu : true};
  }

  expandMenu = (e) => {
    debugger;
    this.setState({expandMenu : (this.state.expandMenu) ? false : true});
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
      {this.props.farItems.map((r) => {
        return (
          <span className="menus" title={r.name} onClick={r.onClick}>
            <div className={`menu-item ${r.icon}`}></div>
          </span>
        )
      })}
      </div>
    );
  }

}