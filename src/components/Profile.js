import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  componentWillUnmount() {
    // console.log("Parent unmount");
  }
  render() {
    const { name } = this.state;
    return <h2>Profile Part with name = {name}</h2>;
  }
}
export default Profile;
