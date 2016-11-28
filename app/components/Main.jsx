var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="column small-centered large-4 medium-6">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
