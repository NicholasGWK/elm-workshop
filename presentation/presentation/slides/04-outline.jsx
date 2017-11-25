import React from "react";

import { Slide, Heading, List, ListItem } from "spectacle";

const Outline = [
  <Slide>
    <Heading size={4} textColor="tertiary" caps>
      The goal: Get you hacking on Elm!
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={5} textColor="secondary" caps>
      Workshop Outline
    </Heading>
    <List textSize={36}>
      <ListItem textSize={36} padding={4}>
        Syntax
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Render and style static HTML
      </ListItem>
      <ListItem textSize={36} padding={4}>
        The Elm Architecture(TEA) or how to build webapps
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Expanding Apps (with types!)
      </ListItem>
    </List>
  </Slide>
];

export default Outline;
