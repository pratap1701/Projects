/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Baibhav Pratap Singh Thakur",
  title: "Software Developer & Content Creator",
  email: "baibhavpratapsingh1701.com",
  gitHub: "https://github.com/pratap1701",
  instagram: "microsoft",
  linkedIn: "https://www.linkedin.com/in/baibhav-pratap-singh-thakur-894483226/",
  medium: "English",
  twitter: "https://twitter.com/baibhavprataps2",
  youTube: "https://www.youtube.com/channel/UCebPd4mtLh3QXuQ4oms9hHw",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
