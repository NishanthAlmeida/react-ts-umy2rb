import * as React from 'react';
import { SegmentMenu } from './segment-menu';
import {default as TaskItems } from './data/mock-data';
import { ISegmentMenuItems } from './types/segment-types';

interface AppProps{
  menuItems: any;
 }
interface AppState{ containerExpanded: boolean; }
 
export class TaskCards extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { containerExpanded : true};
    }

    slideTaskDetails = (event) => {
      this.setState({containerExpanded: (this.state.containerExpanded) ? false : true});
    }

    prepareSegmentMenuItems(){
      return [
        {
          key: 'process-viewer',
          name: 'process-viewer',
          icon: 'process-icon',
          onClick: (e) => {
            alert('click');
          }
        },
        {
          key: 'open-form',
          name: 'open-form',
          icon: 'openform-icon',
          onClick: (e) => {
            alert('click');
          }
        },
        {
          key:'change-flow',
          name: 'Change Flow',
          icon: 'changeflow-icon',
          onclick: (e) => {
            alert('change flow');
          },
          hangingMenuItems: [
          {
            name: 'Change Flow',
            icon: 'changeflow-icon',
            onclick: (e) => {
              alert('change flow');
            }
          }
        ]
        }
      ];
    }

    render() {
        return (
            <div className="task-card" style={{ height: this.state.containerExpanded ? '200px' : '400px'}}>
                <SegmentMenu menuItems={this.prepareSegmentMenuItems()} />
                <div className="processname">
                    Finance Manage Approval
                </div>
                <div className="appname">
                    Finance Process
                </div>

                <div className="priority">
                    <span>Priority: </span> High
                </div>

                <div className="time-details">
                    <div className="item-details">
                        <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAMUSURBVEhLxZTfK2xRFMfvn+ZHfoxhEIOJKDMeRFKEGlF+PXhBoUkzHkTCg0fEm1+ZpvBgEInMxEzk98+Z8b19151znDPHlXu7ud/anc7ae+3P2mutvX/gm/T/QS8vLzg9PYXX68Xi4iLm5+cNg3afz4dgMIhIJBL3/FgGEB0ODw8xODiImpoalJeXw2azoaSkxDBo53xtbS1cLheOj48RjUbjO+mlAxGyu7uLtrY2WCwWpKamIjs7GxUVFbDb7YZBiNlslnW5ubno6OgQ/49OpwOdn5+jv78feXl5KCsrw9TUFDY3N7G/v4+DgwPDoJ2pGx0dlRPSj/7hcDi+47tUEGvCelRWVqK4uBjT09O4uLhALBaT+dvbW6yurmJhYQHr6+u4u7sTO+dDoZCst1qtctKNjQ3ZTysVdHNzg5mZGRQVFaGurk4iViAUTzs0NCR1GxkZkSAUcR3XNzY2orS0VKDcTysVdHl5CY/HIylob2/H2dlZfOaX2FldXV0SdXd3N7a3t2XN6+urzLNDWVvODwwMGNKnghih2+2WTuKGPIFW7ChGnJmZKbVwOBzo7e1VA1JA+fn5EkhioF8GBQIBsZtMJiQlJSElJUVSfHJyIvNaUGdn59+DHh8fsbe3h7W1NSwvL2NlZUXSRzv1ZdDV1RUmJyelRi0tLVITrd7e3uQy8o4og//X19dyBQhtbW1VQbz0vFPch3VUQYxsaWlJQGxxtnpiiyaKDTQxMSEpdDqdqK6uFhADpb2hoUGgfr//HcQWZcF7enpQUFCApqYmec+Ojo5+C2QWxsfHZT1rl5OTI1+2OAPOysqSBmLKVRD1/Pwsl62+vl6cWK+qqiqJmLbm5maMjY3JSSimj8ENDw9LJ/IpSktLk5GRkSFvIGv58PCgB7EOTCHz3dfXJ1HRmV3GwWgTC62F8b1LTk5Genq6DkLpQIrozAu3s7MjHTY7OyuvBr88seKsSAsrLCw0QKgPQYp4Qm5CB75t9/f3eHp60j1NiriOd2pubg5bW1uGYD4F/anY7gQQmqh/CvpM3wQCfgI3XrYBuNqLaQAAAABJRU5ErkJggg==" /></span>
                        <span>3 Days ago</span>
                    </div>
                    <div className="item-details right-align">
                        <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOtSURBVEhLzVX1S2RhFN1/0O7uzh9MDFBRMFAEFVEMbLGwEBE7sBC7wO7ujrOcO2/GeevMsrCw7IFh4Ktz45z7fuAf4f8hent7w9HREaamptDa2ora2lrU19ejq6sLi4uLuLq6wvv7u3LaOIwSkeDg4AAdHR1IS0uDr68vbG1tYWlpCSsrKzg6OiIkJAQ5OTkYHh7Gzc2NctMwDBK9vLxgdXUV+fn5cHd3h4mJiRC4ubkhICAA3t7eQmRhYSHr4eHhaGxsxPHxMT4/P5VX1PhG9Pr6irW1NeTm5sLBwUGySEpKkswmJycxMDCAoaEhjI2NSRlJQkKS19TU4OTkRHlJDRURo2E/SkpK4OzsDBcXFxQVFUl2fKCvrw+ZmZmytrS0JGvj4+NITk6GtbU1QkND0dvbi7u7O+XFL6iIHh8fMTIyIlHa29ujoKAAGxsb0q/Ly0tUV1fD09MTsbGxmJ+fFxE8PDyIUOLi4iT71NRUqcjHx4fyqgYqovPzc5SWlkr9ScZSsZTExcUFKioqJMuoqCgsLCxIBfi7vr5GW1sbfHx8EBgYKFkxAH3oiBjd5uamRMTe5OXlYX9/X9k1TkQw45WVFSQmJsp+eXn5t17piBg5L8fHx8PV1VVUxEi1IFFZWRmcnJwQERGhIuI/rZCVlSVBZmdnY3d3V/a00BFR0rOzs1JrSrq9vV3VVPaosrJSHiJZVVWVRK0lo7TpKe5nZGRga2tL1rUwmlFTU5PKhCTt6emR3tFXXl5eQsbysuzMiAQUETPb2dlRbmqgI6JKtre3kZ6eLmKgj/b29pRdTQ8pFvqIWWu9U1dXh8PDQxlHVCNtwQDOzs6UmxroiFgC9oGH2NCwsDAx5fPzs3JCc+b29hYTExNISUmBn58fCgsLxVPNzc0i/aCgIPT394tV9KEjIp6enkTS0dHRsLOzk1LQrFSVFiSjdOmV6elp2R8cHERMTIz4iGWj937rIz7ClBsaGqQHJOPFubk5CUILnmNPeZaeSUhIEBJWgdnc398rJ7+gIiLYC0qzuLhYSsjRQjlzLHHGLS8vi2i6u7tFxgzIzMwM/v7+aGlpEXIG8iu+EREsFVXDIUmnm5qawtzcXBrNPnh4eIi6uE5RMJDOzk6ROwM1BINEBC8wutHRUZkSwcHBokYbGxspEz8ZkZGR4i0qjiL5tS/6MEpEsATszenpKdbX12V4snz80M3MzMjI4hdWXyzG8FsifWgFQLlzivBxQ70whj8m+jsAPwEcMR59cpWcpwAAAABJRU5ErkJggg==" /></span>
                        <span>3 Days ago</span>
                    </div>
                </div>
                <div className="metadata-details">
                    <div className="metadata-items">
                        <div className="item-header">Region:</div>
                        <div className="item-data">EMEA</div>
                    </div>
                    <div className="metadata-items right-align">
                        <div className="item-header">Amount:</div>
                        <div className="item-data">1400</div>
                    </div>
                    <div className="metadata-items">
                        <div className="item-header">Department:</div>
                        <div className="item-data">Procurement</div>
                    </div>
                    <div className="metadata-items right-align">
                        <div className="item-header">Vendor:</div>
                        <div className="item-data">AgilePoint INC</div>
                    </div>
                    <div className="metadata-items">
                        <div className="item-header">Product:</div>
                        <div className="item-data">Agile Point NX 7.0</div>
                    </div>
                    <div className="metadata-items right-align">
                        <div className="item-header">Requested By:</div>
                        <div className="item-data">Jane Doe</div>
                    </div>
                    <div className="metadata-items">
                        <div className="item-header">Requested Date:</div>
                        <div className="item-data">12/03/2019</div>
                    </div>
                </div>
                  <div className={`slideButton ${this.state.containerExpanded ? 'slidein' : 'slideout'}`} onClick={this.slideTaskDetails}></div>
            </div>
        );
    }
}