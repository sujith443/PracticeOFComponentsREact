import React from "react";

const date = new Date();
const currentTime = date.getHours();

function Day() {
  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  const retunee = [greeting, customStyle];

  return retunee;
}

export default Day;
