import React from "react";
import { state, setState } from "react";
import { useState } from "react";
import Profile from "./Profile";
import { sampleData } from "../utils/mockData";
import { UserContext } from "../utils/UserContext";

const Section = ({
  sectionHeading,
  sectionText,
  visibility,
  setVisibility,
}) => {
  // const [visibility, setVisibility] = useState(false); //First build logic with State Variables then replace it with parent state vars
  return (
    <div className="p-2 m-2 border-2 rounded-md border-purple-400  ">
      <h1 className="font-semibold text-xl">{sectionHeading}</h1>
      {visibility ? (
        <>
          <button
            className="p-1 underline-offset-1 rounded-md bg-purple-700 text-white"
            onClick={() => {
              setVisibility(null); //Remove Everything from section config
            }}
          >
            Hide
          </button>
          <p>{sectionText}</p>
        </>
      ) : (
        <button
          className="p-1 underline-offset-1 rounded-md bg-purple-700 text-white"
          onClick={() => {
            setVisibility(sectionHeading); //Change the section config
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};
export const About = () => {
  const [sectionConfig, setSectionConfig] = useState("Section-1");
  const setVisibilityConfig = (section) => setSectionConfig(section); // Created a function to change the visibility config and passed to child component
  return (
    <>
      <h1 className="p-2 bg-orange-400 text-center text-3xl">About Us Page</h1>
      <Section
        sectionHeading="Section-1"
        sectionText={sampleData}
        visibility={sectionConfig === "Section-1"}
        setVisibility={setVisibilityConfig} // We are sending a function to set the state
      />
      <Section
        sectionHeading="Section-2"
        sectionText={sampleData}
        visibility={sectionConfig === "Section-2"}
        setVisibility={setVisibilityConfig}
      />
      <Section
        sectionHeading="Section-3"
        sectionText={sampleData}
        visibility={sectionConfig === "Section-3"}
        setVisibility={setVisibilityConfig}
      />
    </>
  );
};

export class About2 extends React.Component {
  //Class based Component Practice
  constructor(props) {
    super(props); //Essential Part Can't removed
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
          <UserContext.Consumer>
            {({ user }) => {
              <h1 className="from-teal-500 font-bold">
                From Static Context{user.name}
              </h1>;
            }}
          </UserContext.Consumer>
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
