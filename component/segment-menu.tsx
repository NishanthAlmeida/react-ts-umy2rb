import * as React from 'react';
import { ISegmentMenuItems } from '../types/segment-types';

export interface segmentMenuProps {
  menuItems: ISegmentMenuItems[];
  farItems: ISegmentMenuItems[];
}

interface segmentMenuState {
  expandFarItemMenu: boolean;
  top: string;
  left: string;
}

export class SegmentMenu extends React.Component<segmentMenuProps, segmentMenuState> {
  constructor(props: segmentMenuProps) {
    super(props);
    this.state = { expandFarItemMenu: false, top: '0px', left: '0px' };
  }

  expandMenu = (e) => {
    this.setState({ expandFarItemMenu: (this.state.expandFarItemMenu) ? false : true, top: e.pageY, left: e.pageX });
  }

  closeFarItemMenu = (e) => {
    this.setState({ expandFarItemMenu: false });
  }

  render() {
    return (
      <div className="menu-widget">
        <div className="segment-menu-inline" >
          {this.props.menuItems.map((item) => {
            return (
              <span className="menus" title={item.name} onClick={item.onClick}>
                <div className={`menu-item ${item.icon}`}></div>
              </span>
            )
          })}
        </div>

        <span className="menus expand-content" onClick={this.expandMenu}>
          <div className="menu-item dot-icon" tabIndex="0"></div>
        </span>
        {this.state.expandFarItemMenu ?
          <div className="faritems-layer-container" onClick={this.closeFarItemMenu} >
            <div className="faritems-container" >
              <ul className="faritem-menu" style={this.state.expandFarItemMenu ? { top: this.state.top, left: this.state.left, display: 'block' } : { display: 'none' }}>
                {this.props.farItems.map((item) => {
                  return (
                    <li className="faritem-menu-item" tabIndex="0" key={item.name} onClick={item.onClick}>
                    <a href="" style={{width:'100%'}}>
                      <span className={`faritem-icon ${item.icon}`}></span>
                      <span className="faritem-text">{item.name}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          :
          <React.Fragment></React.Fragment>}
      </div>
    );
  }

}