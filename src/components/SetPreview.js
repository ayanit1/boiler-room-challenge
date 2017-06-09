import React from 'react';
import { Link } from 'react-router';

export default class SetPreview extends React.Component {
  render() {
    return (
      <Link to={'/set/${this.props.id}'}>
        <div className="set-preview">
          <img src={'img/${this.props.image}'}/>
          <h2 className="artist">{this.props.artist}</h2>
        </div>
      </Link>
    );
  }
}
