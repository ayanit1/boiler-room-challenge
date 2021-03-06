'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import SetsMenu from './SetsMenu';
import sets from '../data/sets';

export default class SetPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const set = sets.filter((set) => set.id === id)[0];
    if (!set) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${set.cover})` };
    return (
      <div className="set-full">
        <SetsMenu sets={sets}/>
        <div className="set">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${set.image}`}/>
            <h2 className="name">{set.artist}</h2>
          </div>
          <section className="description">
            <h2><strong>{set.title} | {set.location}</strong></h2>
            </section>
            <section className="videoplayer">
            <iframe width="560" height="315" src={set.video} frameborder="0" allowfullscreen></iframe>
            </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
