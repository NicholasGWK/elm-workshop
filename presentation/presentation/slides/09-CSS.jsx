import React from "react";
import { Slide, Heading, List, ListItem, Link } from "spectacle";

const CSS = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> CSS </Heading>
    <List>
      <ListItem textSize={34} padding={4}>
        Elm says just use CSS classes for styling
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Community packages: {" "}
        <Link href={"https://github.com/rtfeldman/elm-css"}>elm-css </Link>,
        <Link href={"https://mdgriffith.gitbooks.io/style-elements/content/"}>
          {" "}
          elm-style-elements
        </Link>
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Tachyons is a GREAT fit
      </ListItem>
    </List>
  </Slide>
];

export default CSS;
