import * as React from 'react';

export class SegmentMenu extends React.Component {
  constructor(props: []) {
    super(props);
  }
  render() {
    return (
      <div className="menu-widget">
        <span className="menus"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAjCAYAAAANDvOtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAQPSURBVFhH7Zb1S217EMXfn2YHdmEXBggWBiL4kwpiodiKGCioKIqNGCi2mCgiJnaL3boua945PuMU3Heu74ELNpvdn5nvzJr9F/5H+oHVl35g9aUfWH1JZ9jn52ccHBxgbGxM9t8hnWAJur29jZKSEoSHh6OiouJbgLXCKkELCwvh6uoKMzMzeHl5fQuwRtjPoEZGRjAwMICxsfG3AKuFJejW1tYXUOVGYE9PT5SXl/8xYLWwr6+vOD09RUNDg0C9B1XCBgQEoKOjA5eXl4qn9CutZbC3t4fq6mq4ubl9APX390djYyOOj4/x8vKieOIfPT4+YmdnB/39/aipqUFxcTHy8vJQVFQkCZiYmMDJyYnKZ9VJpwZ7D6wN9Pb2FpOTk8jPzxfn8PX1RVhYGDIyMlBaWoq0tDSEhITAz88PUVFRqKysxNLSEu7v7xVvUC+tsJSy0Zgdfqiuru4LKDO5vr4uTcd7bGxsYGVlhbi4OAwMDEiWj46OsLm5ic7OToSGhsLc3Bz29vYSFINnpjVJJ1iKGRscHERKSopk7j0or42MjCAhIQEODg6SfW6BgYHo6enB4uIiqqqqkJWVhfn5eemFlpYW+Pj4SFmZmJjAw8NDrq+srKgtDZ1huUyss8zMTMzNzSnO/g06PDyMmJgYWFhYvNW1tbU10tPTMTMzI6De3t4SCMuAQTNgPqN0GUNDQ7mempqqFvi3YQ8PD5GTkwNbW9s3UG5c3oKCAoFKTk6WQJhtd3d3qd2pqSkkJSV9CJDAzHZ3d7ck4bN+G/bu7k7+F5gl1qDyw8rMTk9Po6ysDM7OzgLDDLe3t8s7YmNjP/g3A87OzpbaZ598llZY+i2bqbm5GdHR0TIg4uPjpUlYe7x+c3PzlkFlhpnFoKAg9PX1YW1tTfyYA4Q1zGM2FKcg72UQLi4ushKrq6vSrKqkFZagzAyXx9TUVF7MDNK+WIssAwIz8xsbG6ivr0dwcLDcyyVmgL29vXIfg6MrMHA6Bv8z+K6IiAgJnpPw6elJ8eWv0gh7fX2Nrq4uyZCqccvzNH2WAsWmuLi4wMLCAmpra2UFmDFOQNoTj7nnMbfExES0tbVheXlZvsWgNUkjLLORm5sLOzu7D6DKzdHRUXyV/vlerDdC89+CVjU0NITW1lY0NTXJfnR0VOxsd3dXSkidVX2WRtj9/X2xGpq7Klh2PH90eJ86MVtcWkJdXV3JXlXz6CKNsJwotBknJyeVsOxwzv2zszPFE/qVRlg2zfj4uIxG1uh7UDYGrWd2dlZjU/yb0gjLJTw/P5cmi4yMfDNwS0tLmfmcXFzWPyWNsBSLn7XGEUjPpO3QAeiVqqaMPqUVVimllzKTDw8PWm1GH9IZ9r+gH1h96QdWPwJ+AeInl40IgOBDAAAAAElFTkSuQmCC" /></span>
        <span className="menus"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAfCAYAAACPvW/2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAIoSURBVFhH7ZbNi2lhHMfvn2Yj0oSSl2EShaxkI1laa6zs0czKwkssSFlQZKXkrSyUmg3T5P093+n33GMWDtd1D2Nu+da3U+f5/Tqfc57nfJ/nF36Y7kCndAc6pf8LaDaboVKp4OXlBYFAgDkcDqNarWKxWHBVwHq9RqfTQSQS+ao75FAoxHrn8znXydcfgQaDAWKxGCwWCx4eHpjNZjNSqRTG4zFXBWy3W7y/vyMajcJqtX7V7pt6k8kkRqMR18nXSSB6a4PBAJlMhqenJ7hcLuRyOUwmE67qtzabDd7e3tjXfHx8hEgk4lmj0TDo4XDIdfH1V0AmkwkOhwPZbJZNDd0ngH2dgroYEH1qj8eDZrPJjRzXx8cHXl9fodVqbw9ED0okErDZbBCLxbcFOgQjlUphNBqhUCi+F4jq9mHkcjl8Ph/y+TyCwSBbU98CRDXxeJwH8/z8jFarxTJnt9CdTud1gU7BrFYrVrf7+zKZDEql0nWAKAy73S6bFgq9YzA7ERQFIgXqocjYSRAQbS3lchlutxtqtfoozDkSNGU7qHq9zkKz3W4LgiEJXtQERZsrgdFVqAQDXVpXB1oul6jVavD7/fB6vSgUCphOp9woX1cHohwqFouw2+2XC0aKfzoTUeKm0+mzTOcfOpxdNKn1ej0kEglUKhV0Ot1Zpl1fqVSy4LwoEAWfUAsGot+41+uh0Wiws7VQU171+/1/T+pb6A50Sj8MCPgEdz/KFXU0n6sAAAAASUVORK5CYII=" /></span>
        <span className="menus"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAhCAYAAAC1ONkWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAPdSURBVFhH7ZbXL2xRFMbvn6Z3IUr0EBJECQ/Eg/5AiBbtwZMHCSKEEO1FS5QgEUT03one63fzrZzhkDnjnHvnyn3wJSvGzJ49v7P2Wt/av/Cf6gfMqH7AjOqPwJ6ennB8fIy1tTWsrKzoDq4/OjrCw8ODspO2DIHd3NxgdHQUBQUFiI+Pl0hMTNQVCQkJSE1NRUNDAw4ODpQdtaUb7OLiAu3t7fIjbm5usLe3Nxze3t6oqKjA9va2squ2dIExU4ODg0hKShKo0NBQlJeXo7e3F+Pj45iamtIVs7Oz2NnZwf39vbKztnSB7e3tobCwEJ6enoiMjERbWxv29/dxd3eHl5cXZZV19SXY8/Mz5ufnkZKSAn9/f1RXV2Nrawuvr6/Kin+jL8GY9omJCTnGoKAgNDU14ezsTPn0Xcwc63B1dRW7u7u6Os+SdIGNjY29gbW0tAiAWoSYm5tDcXExYmNjJbtcR0sxJ9rN+fm5lIKWdIMlJycjODjYLNjV1RW6u7sRFRUFW1tbaZDs7GwsLi4qK97F73Z2diI3Nxe1tbWaHWoVMP7PhoiIiBAwZ2dnpKWlSRbV4jpaTkxMDFxdXWW/mpoas3AWwQjFmunq6hL/CgwMRF1dHdbX1z8cA18PDw+L4dKv/Pz8xK82NzeVFR+hnJycYGNjAwcHB004TbDb21vJVE5OjliEj4+PHFFYWBgyMzMFxATHwueoaWxsRFxcHPLy8jA9Pf3WAOxsjiQen4uLi0AxmF1HR0eBHRoa+tAwmmCnp6eSHWaJT8anNDk436uvr8fJyYlsRjupqqpCdHS0NAgNmEfZ2toqwLQWFntfXx/S09NljYeHh+yTkZEhZUCvVHuiJtjj4yMWFhZQVFQko4RPx+Dr0tJSgSFYT0+PzECar52dnTwE/zITISEh0qnLy8sCxwkyMzOD/Px8OQHOz4GBAVxeXkpW1bJYY5/h1FD87PDwUGrJy8vr7XjUQcDw8HD09/e/HZPpO76+vtJQPHJzsghGEYDXFR5Lc3MzlpaW5D2KGRgZGZHbBv2LdqEO1ltlZaVkzHRMVgOjmGZ6FVNOczSJx8MmYX2wewmgDr5HEHVRWxXMmuJdrKysTGqME4I3DnP6VjBmeGNjQ2yDGWPt0hPN6dvACMXZSa+jFwYEBMiFgDZiTobB6G90cPqW3mBN8T7Ho6N3sbuZNY6szzZhkmEwjg5OAxqk3nB3d5fZSI/j66ysLExOTv7d7eKz2IElJSXi7pxzeoJrOXY4qjo6OqRbLUFRhsHY+ry303j1Bq8/nJV8qOvra13X8W8rfqP6ATOq/xQM+A0yCKuMG4ratwAAAABJRU5ErkJggg==" /></span>
        <span>...</span>
      </div>
    );
  }

}