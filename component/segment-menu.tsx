import * as React from 'react';
import { ISegmentMenuItems } from './types/segment-types';

export interface segmentMenuProps{
  menuItems: ISegmentMenuItems[];
}

export class SegmentMenu extends React.Component<segmentMenuProps> {
  constructor(props: segmentMenuProps) {
    super(props);
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
        <span>...</span>
      </div>
    );
  }

}