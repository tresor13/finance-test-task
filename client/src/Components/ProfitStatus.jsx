import React from "react";
import arrowUp from "../assets/up-arrow-64.png";
import arrowDown from "../assets/down-arrow.png";
import noChangeMark from "../assets/no-change.png";
function ArrowUp() {
  return (
    <div>
      <img
        src={arrowUp}
        alt={"arrow-up"}
        style={{ width: 20, height: 20 }}
      ></img>
    </div>
  );
}

function ArrowDown() {
  return (
    <div>
      <img
        src={arrowDown}
        alt={"arrow-up"}
        style={{ width: 20, height: 20 }}
      ></img>
    </div>
  );
}

function NoChangeMark() {
  return (
    <div>
      <img
        src={noChangeMark}
        alt={"no-change"}
        style={{ width: 20, height: 20 }}
      ></img>
    </div>
  );
}

function ProfitStatus({ status }) {
  const iconsStatuses = {
    rising: <ArrowUp />,
    falling: <ArrowDown />,
    noChange: <NoChangeMark />,
  };
  const icon = iconsStatuses[status];
  return <div>{icon}</div>;
}

export default ProfitStatus;
