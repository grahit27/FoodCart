import React from "react";
import { state, setState } from "react";
import Profile from "./Profile";
export const About = () => {
  return (
    <>
      <div className="about-page">
        <h1>About Us Page</h1>
        <p>Some info about the restaurant</p>
      </div>
    </>
  );
};

export class About2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Timer 1");
    }, "1000");
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("State changed");
      clearInterval(this.timer);
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { count } = this.state;
    return (
      <>
        <div className="p-5">
          <h1>About Us Page from Class Based Component</h1>
          <button
            className="bg-purple-400 rounded-md p-2 my-2"
            onClick={() => {
              this.setState({
                count: count + 1,
              });
            }}
          >
            Increase Count And Stop Timer
          </button>
          <h1 className="text-xl font-semibold">Final Value of {count}</h1>
          <Profile name="Tester Name" />
        </div>
      </>
    );
  }
}
