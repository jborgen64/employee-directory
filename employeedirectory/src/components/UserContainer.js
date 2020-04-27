import React, { Component } from 'react';

class UserContainer extends Component {

  state = {
    currentDept: "dept"
  };

  handleDeptChoice = dept => {
    this.setState({ currentDept: dept });
  };

  renderDept = () => {
    if (this.state.currentDept === "Home") {
      return <Home />;
    } else if (this.state.currentDept === "Sales") {
      return <Sales />;
    } else if (this.state.currentDept === "Accounting") {
      return <Accounting />;
    } else if (this.state.currentDept === "Engineering") {
      return <Engineering />;
    } else if (this.state.currentDept === "Operations") {
      return <Operations />;
    } else if (this.state.currentDept === "Leadership") {
      return <Leadership />;
    } else (this.state.currentDept === "All") {
      return <All />;
    }
  };

render() {
  return (
    <div>
    <NavTabs
      currentDept={this.state.currentDept}
      handleDeptChoice={this.handlePageDept}
    />
    {this.renderDept()}
  </div>
  );
}
}

export default UserContainer;