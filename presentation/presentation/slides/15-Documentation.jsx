import React from "react";
import { Slide, Heading, List, ListItem, Text } from "spectacle";

const Documentation = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={4} textColor="secondary" caps>
      Expanding Apps
    </Heading>
    <Text textColor="tertiary" margin={50} textSize={38}>
      When does expanding apps get hard? What can we do?
    </Text>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Documentation </Heading>
    <List>
      <ListItem textSize={32} padding={5}>
        Harder to keep track of all Msg types and functions
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Documentation + comments are good, but get stale
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Let's use explicit type annotations!
      </ListItem>
    </List>
  </Slide>
];

export default Documentation;
