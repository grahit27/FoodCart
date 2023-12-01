import React from "react";
import { useState } from "react";
import { sampleData } from "../utils/mockData";

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
