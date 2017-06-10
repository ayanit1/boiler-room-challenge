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
            <h2>Title: {set.title}</h2>
            <h2>Location: {set.location}</h2>
            <h2><a href={set.link} target="_blank">Watch on youtube</a></h2>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
