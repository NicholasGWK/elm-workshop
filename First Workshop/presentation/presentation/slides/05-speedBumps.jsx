import React from "react";

import { Slide, Heading, List, ListItem } from "spectacle";

const SpeedBumps = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Speedbumps
    </Heading>
    <List>
      <ListItem textSize={34} padding={4}>
        Syntax can be unfamiliar
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Hardcore functional
      </ListItem>
      <ListItem textSize={34} padding={4}>
        New concepts are brand new, can be hard to grok
      </ListItem>
    </List>
  </Slide>
];

export default SpeedBumps;
