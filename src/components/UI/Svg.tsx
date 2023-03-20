import React from "react";

interface IProps {
  children: React.ReactElement;
}

const Svg: React.FC<IProps> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#1976d2"
        // fill-opacity="1"
        fillOpacity="1"
        d="M0,96L40,85.3C80,75,160,53,240,48C320,43,400,53,480,80C560,107,640,149,720,165.3C800,181,880,171,960,160C1040,149,1120,139,1200,117.3C1280,96,1360,64,1400,48L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      >
        {props.children}
      </path>
    </svg>
  );
};

export default Svg;
