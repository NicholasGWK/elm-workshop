import React from "react";

import { Slide, Heading, List, ListItem } from "spectacle";

const Recap = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Ugh, Part 1 was SOOOOO long ago
    </Heading>
    <List textSize={36}>
      <ListItem textSize={36} padding={4}>
        Syntax
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Render and style static HTML
      </ListItem>
      <ListItem textSize={36} padding={4}>
        The Elm Architecture(TEA) - building webapps
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Expanding Apps (with types!)
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Recap example + Exercise!
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Outline
    </Heading>
    <List textSize={36}>
      <ListItem textSize={36} padding={4}>
        Subscriptions
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Commands
      </ListItem>
      <ListItem textSize={36} padding={4}>
        JS...and ports!
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Deploying Elm
      </ListItem>
    </List>
  </Slide>
];

export default Recap;
