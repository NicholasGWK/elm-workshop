import React from "react";

import { Slide, Heading, List, ListItem } from "spectacle";

const SpeedBumps = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Speedbumps
    </Heading>
    <List>
      <ListItem textSize={34} padding={4}>
        Syntax is similar to JS in many ways, but different
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Hardcore functional
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Old habits die hard
      </ListItem>
      <ListItem textSize={34} padding={4}>
        New concepts are actually brand new, can be hard to grok
      </ListItem>
    </List>
  </Slide>
];

export default SpeedBumps;
