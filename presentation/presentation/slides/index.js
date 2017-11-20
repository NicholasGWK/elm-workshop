// src/slides/index.js
import { cloneElement } from "react";

import Intro from "./01-intro.jsx";
import WhyElm from "./02-whyElm.jsx";
import RealReason from "./03-realReason.jsx";
import Outline from "./04-outline.jsx";
import SpeedBumps from "./05-speedBumps.jsx";
import Syntax from "./06-syntaxNotes.jsx";
import HTML from "./07-HTML.jsx";
import HTMLDemo from "./08-HTMLExplanation.jsx";
import CSS from "./09-CSS.jsx";
import ElmLive from "./10-ElmLive.jsx";

const slides = [].concat(
  Intro,
  WhyElm,
  RealReason,
  Outline,
  SpeedBumps,
  Syntax,
  HTML,
  HTMLDemo,
  CSS,
  ElmLive
);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));
