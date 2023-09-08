import React from "react";
import { state, setState } from "react";
import Profile from "./Profile";
// export const About = () => {
//   return (
//     <>
//       <div className="about-page">
//         <h1>About Us Page</h1>
//         <p>Some info about the restaurant</p>
//       </div>
//     </>
//   );
// };

class About2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      timerSwitch: false,
    };
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("State changed");
    }
    if (this.state.timerSwitch !== prevState.timerSwitch) {
      if (this.state.timerSwitch) {
        // Create a new Timer
        this.timer = setInterval(() => {
          console.log("Timer 1");
        }, "1000");
      }
      if (!this.state.timerSwitch) {
        clearInterval(this.timer);
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { count, timerSwitch } = this.state;
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
            Increase Count
          </button>
          <h1 className="text-xl font-semibold">Final Value of {count}</h1>

          {/* Timer Button */}
          {timerSwitch ? (
            <button
              className="bg-red-400 rounded-xl m-2 p-2"
              onClick={() => {
                this.setState({
                  timerSwitch: false,
                });
              }}
            >
              Switch Off Timer
            </button>
          ) : (
            <button
              className="bg-green-400 rounded-xl m-2 p-2"
              onClick={() => {
                this.setState({
                  timerSwitch: true,
                });
              }}
            >
              Switch On Timer
            </button>
          )}
          <Profile name="Tester Name" />
        </div>
      </>
    );
  }
}
export default About2;
