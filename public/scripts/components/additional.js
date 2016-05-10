import React from 'react';
import ReactDOM from 'react-dom';

const Additional = React.createClass({
  render() {
    return (
      <h1>Additional</h1>
    );
  }
});

ReactDOM.render(
  <Additional/>,
  document.getElementById('additional')
);
