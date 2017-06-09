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
        <SetMenu sets={sets}/>
        <div className="set">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${set.image}`}/>
            <h2 className="name">{set.title}</h2>
          </div>
          <section className="description">
            {set.artist}
            {set.location}
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
