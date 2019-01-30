import React, { Component } from 'react';
import List from './List';
import Article from './Article';

class App extends Component {
  render() {
/*
    const array = [
      { firstName: "April", lastName: "Bingham" },
      { firstName: "Tom", lastName: "Cruise" },
      { firstName: "Mickey", lastName: "Mouse" }
    ];
*/
    const article = {
        title: "The Statue of Liberty's torch heads to new museum",
        date: "November 22, 2018",
        author: "Kate Farley"
    };
    return (
      <div className="App">
      {/*<List list={array} />*/}
        <Article article={ article } />
      </div>
    );
  }
}

export default App;
