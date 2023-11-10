import React from "react";

type WelcomeProps = {};

const Welcome: React.FC<WelcomeProps> = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  return <div>{today}</div>;
};
export default Welcome;
