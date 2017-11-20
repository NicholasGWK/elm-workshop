import React from "react";

import { Slide, Heading, List, ListItem } from "spectacle";

const WhyElm = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Why Elm?
    </Heading>
    <List textSize={36}>
      <ListItem textSize={36} padding={4}>
        100% Functional
      </ListItem>
      <ListItem textSize={36} padding={4}>
        No runtime errors
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Amazing compiler messages
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Strong type system
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Enforced semver on central package repo
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Easy refactoring
      </ListItem>
      <ListItem textSize={36} padding={4}>
        First class support of all the ideas we like: Redux, React, TypeScript,
        Immutable, Observables
      </ListItem>
    </List>
  </Slide>
];

export default WhyElm;
