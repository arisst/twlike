const React = require('react');

const BoxPostHeader = React.createClass({
  render() {
    return (
      <div className="box-header with-border">
        <h3 className="box-title">{this.props.boxTitle}</h3>
      </div>
      );
  }
});

module.exports = BoxPostHeader;
