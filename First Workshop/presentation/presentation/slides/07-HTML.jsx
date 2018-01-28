import React from "react";

import { Slide, Heading, List, ListItem } from "spectacle";

const HTML = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={1} textColor="secondary" caps>
      HTML
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      HTML in Elm
    </Heading>
    <List>
      <ListItem textSize={34} padding={4}>
        Functions create elements and add attributes
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Core part of the language, and very fast!
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Pure, composable views
      </ListItem>
    </List>
  </Slide>
];

export default HTML;
