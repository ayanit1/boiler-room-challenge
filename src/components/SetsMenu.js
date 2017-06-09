import React from 'react';
import { Link } from 'react-router';

export default class SetsMenu extends React.Component {
  render() {
    return (
      <nav className="sets-menu">
        {this.props.sets.map(menuSet => {
          return <Link key={menuSet.id} to={'/set/${menuSet.id}'} activeClassName="active">
          {menuSet.artist}
          </Link>;
        })}
      </nav>
    );
  }
}
