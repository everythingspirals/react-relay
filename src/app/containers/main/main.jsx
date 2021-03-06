import React from 'react';
import style from './main.css'
import {GridManager} from 'lib/grid';

export default React.createClass({

  render() {

    let config = {
      routes:[
        {
          id: "gallery",
          grids:[
            {
              id:"nav",
              top:"show-list",
              right:null,
              bottom:null,
              left:null,
              persistState: true
            },
            {
              id:"show-list",
              top:null,
              right:null,
              bottom:"nav",
              left:null,
              persistState: false
            }
          ],
          initialGrid:"nav"
        },
        {
          id: "details/:id",
          grids: [
            {
              id:"details-nav",
              top:null,
              right:null,
              bottom:null,
              left:null,
              persistState: false
            }
          ],
          initialGrid:"details-nav"
        }
      ]
    };

    return (
      <GridManager config={config}>
          {this.props.children}
      </GridManager>
    )
  }
});
