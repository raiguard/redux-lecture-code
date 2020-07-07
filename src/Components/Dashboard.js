import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../redux/reducer";

class Dashboard extends Component {
  changeAvenger = () => {
    // axios request or anything to change the data
    let newAvenger = {
      id: 2,
      name: "Thor",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
      hobbies: ["Hammers", "Lightning", "Speaking Groot"]
    };

    this.props.getUser(newAvenger);
  };

  render() {
    return (
      <div className="dashboard">
        <h1>{this.props.user.name}</h1>
        <p className="hobbies">Hobbies</p>
        {this.props.user.hobbies.map((hobby, i) => (
          <p key={i}>{hobby}</p>
        ))}
        <button onClick={this.changeAvenger}>Change Avenger</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser })(Dashboard);
