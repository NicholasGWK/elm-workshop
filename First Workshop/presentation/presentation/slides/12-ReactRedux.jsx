import React from "react";
import { Slide, Heading, Image } from "spectacle";

import ReactRedux from "../../assets/images/ReactRedux.png";
import Elm from "../../assets/images/Elm.png";

const ReduxArch = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> React + Redux </Heading>
    <Image src={ReactRedux} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> TEA </Heading>
    <Image src={Elm} />
  </Slide>
];

export default ReduxArch;
