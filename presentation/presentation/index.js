// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Slides

import slides from "./slides";
// import WhyElm from "./slides/why-elm.jsx";
// Require CSS
require("normalize.css");
require("../node_modules/tachyons/css/tachyons.css");
export const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return <Deck theme={theme}>{slides}</Deck>;
  }
}
