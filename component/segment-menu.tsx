import * as React from 'react';

export class SegmentMenu extends React.Component {
  constructor(props: []) {
    super(props);
  }
  render() {
    return (
      <div className="menu-widget">
        <span className="menus"><img src="./img1.PNG" /></span>
        <span className="menus"><img src="../images/img2.PNG" /></span>
        <span className="menus"><img src="./images/img3.PNG" /></span>
        <span>...</span>
      </div>
    );
  }

}