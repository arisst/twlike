const React = require('react');
const MainHeader = require('./MainHeader');
const ContentHeader = require('./ContentHeader');
const BoxProfile = require('./BoxProfile');
const WritePost = require('./WritePost');
const BoxPostHeader = require('./BoxPostHeader');
const BoxPosts = require('./BoxPosts');
const BoxRight = require('./BoxRight');

const Dashboard = React.createClass({

  render() {
    return (
      <section>
        <div className="wrapper">
          <MainHeader></MainHeader>
          { /* Full Width Column */ }
          <div className="content-wrapper">
            { /* Content Header (Page header) */ }
            <ContentHeader pageTitle="Home" pageSubTitle="Timeline"></ContentHeader>
            { /* Main content */ }
            { /* Main content */ }
            <section className="content">
              <div className="row">
                <div className="col-md-3">
                  { /* Profile Image */ }
                  <div className="box box-solid">
                    <BoxProfile></BoxProfile>
                    { /* /.box-body */ }
                  </div>
                  { /* /.box */ }
                </div>
                { /* /.col */ }
                <div className="col-md-6">
                  <WritePost></WritePost>
                  <div className="row">
                    <div className="box box-solid">
                      <BoxPostHeader boxTitle="My Posts"></BoxPostHeader>
                      { /* /.box-header */ }
                      <BoxPosts></BoxPosts>
                    </div>
                  </div>
                </div>
                { /* /.col */ }
                <div className="col-md-3">
                  { /* About Me Box */ }
                  <BoxRight></BoxRight>
                  { /* /.box */ }
                </div>
              </div>
              { /* /.row */ }
            </section>
            { /* /.content */ }
            { /* /.container */ }
          </div>
          { /* /.content-wrapper */ }
        </div>
        { /* ./wrapper */ }
      </section>
      );
  }
});

module.exports = Dashboard;
