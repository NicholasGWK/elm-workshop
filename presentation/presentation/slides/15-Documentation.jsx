import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";

const Documentation = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={2} textColor="secondary" caps>
      Expanding Apps
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Documentation </Heading>
    <List>
      <ListItem textSize={34} padding={5}>
        Harder to keep track of all the Msg types and functions
      </ListItem>
      <ListItem textSize={34} padding={5}>
        Documentation and comments are good, but get stale
      </ListItem>
      <ListItem textSize={34} padding={5}>
        Let's use explicit type annotations!
      </ListItem>
    </List>
  </Slide>
];

export default Documentation;
