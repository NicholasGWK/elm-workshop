import React from "react";

import { Slide, Heading, List, ListItem } from "spectacle";

const Syntax = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Notes on syntax
    </Heading>
    <List>
      <ListItem textSize={34} padding={4}>
        Use elm-format
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Whitespace matters
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Implicit return
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Reptition is necessary
      </ListItem>
    </List>
  </Slide>
];

export default Syntax;
