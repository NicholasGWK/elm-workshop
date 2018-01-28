import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";

const TEA = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={4} textColor="secondary" caps>
      The Elm Architecture (TEA)
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> The Elm Architecture! </Heading>
    <List>
      <ListItem textSize={34} padding={4}>
        ALL apps in elm follow TEA
      </ListItem>
      <ListItem textSize={34} padding={4}>
        TEA inspired redux!
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Very similar to Redux + React
      </ListItem>
    </List>
  </Slide>
];

export default TEA;
