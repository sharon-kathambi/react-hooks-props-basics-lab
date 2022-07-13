import React from "react";

function Links(props){
  return (
    <div>
    <h3>Links</h3>
    <a href={props.github}>{props.github}</a>
    <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  )
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio !== "" && props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github="https://github.com/liza" linkedin="https://www.linkedin.com/in/liza/"/>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;