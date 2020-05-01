import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employee from "./employees.json";
import DallasFilterBtn from "./components/DallasFilterBtn"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employee
  };

  handleSort = () => {
   const employee =  this.state.employee.slice(0);
    employee.sort(function(a,b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});
    this.setState({employee});
  }

  desSort = () => {
    const employee =  this.state.employee.slice(0);
     employee.sort(function(a,b) {
     var x = a.name.toLowerCase();
     var y = b.name.toLowerCase();
     return x < y ? -1 : x > y ? 1 : 0;
 });
     this.setState({employee});
     employee.reverse();
   }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>

        <DallasFilterBtn handleSort={this.handleSort} />
        {this.state.employee.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            occupation={employee.occupation}
            department={employee.department}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

