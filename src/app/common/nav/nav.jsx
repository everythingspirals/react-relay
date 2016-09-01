import React from 'react';
import {Grid,GridNode} from 'lib/grid';
import style from './nav.css';

export default React.createClass({
    render() {

      return (
        <nav className="nav">
            <Grid gridId="nav" nodeCount={this.props.navItems.length}>
              <ul>
                {this.props.navItems.map( (navItem,key) => {
                  return (
                   <li key={key}>
                     <GridNode nodeId={key}>
                       <a href={navItem.href} >{navItem.name}</a>
                     </GridNode>
                   </li>
                )})}
             </ul>
           </Grid>
        </nav>
      )
    }
});