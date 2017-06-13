'use strict';

import React from 'react';
import SetPreview from './SetPreview';
import sets from '../data/sets';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="sets-selector">
          {sets.map(setData => <SetPreview key={setData.id} {...setData} />)}
        </div>
      </div>
    );
  }
}
