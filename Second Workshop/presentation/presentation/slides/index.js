// src/slides/index.js
import { cloneElement } from "react";

import Intro from "./01-intro.jsx";
import Recap from "./02-recap.jsx";

const slides = [].concat(Intro, Recap);

export default slides.map((slide, i) => cloneElement(slide, { key: i }));
