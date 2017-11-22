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
import TEA from "./11-TEA.jsx";
import ReduxArch from "./12-ReactRedux.jsx";
import HTMLProgram from "./13-HtmlProgram.jsx";
import Msg from "./14-Msg.jsx";
import Documentation from "./15-Documentation.jsx";
import TypeAnnotations from "./16-typeAnnotations.jsx";
import TypeAliases from "./17-typeAlias.jsx";
import UnionTypes from "./18-UnionTypes.jsx";

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
  ElmLive,
  TEA,
  ReduxArch,
  HTMLProgram,
  Msg,
  Documentation,
  TypeAnnotations,
  TypeAliases,
  UnionTypes
);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));
