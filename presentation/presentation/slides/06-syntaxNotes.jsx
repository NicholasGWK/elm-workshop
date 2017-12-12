import React from "react";

import { Slide, Heading, List, ListItem } from "spectacle";

const Syntax = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={1} textColor="secondary" caps>
      Syntax
    </Heading>
  </Slide>,
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
        Reptition is necessary
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Synxtax Example
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Exercise 1 - Syntax
    </Heading>
  </Slide>
];

export default Syntax;
