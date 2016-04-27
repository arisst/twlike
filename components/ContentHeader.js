const React = require('react');

const ContentHeader = React.createClass({
  render() {
    return (
      <section className="content-header">
        <h1>
          {this.props.pageTitle}
          <small>{this.props.pageSubTitle}</small>
        </h1>
      </section>
      );
  }
});

module.exports = ContentHeader;
