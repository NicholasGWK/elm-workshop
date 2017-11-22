import React from "react";
import { Slide, Heading, List, ListItem } from "spectacle";

const Msg = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Expanding the Msg Type </Heading>
    <List>
      <ListItem textSize={34} padding={5}>
        The msg doesn't have to be a string!
      </ListItem>
      <ListItem textSize={34} padding={5}>
        We can just as easily use a record!
      </ListItem>
      <ListItem textSize={34} padding={5}>
        Sounds a lot like actions!
      </ListItem>
    </List>
  </Slide>
];

export default Msg;
