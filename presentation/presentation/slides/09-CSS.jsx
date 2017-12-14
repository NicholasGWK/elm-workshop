import React from "react";
import { Slide, Heading, List, ListItem, Link } from "spectacle";

const CSS = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={1} textColor="secondary" caps>
      CSS
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> CSS </Heading>
    <List>
      <ListItem textSize={32} padding={4}>
        Elm says just use CSS classes for styling
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Community Packages:{" "}
        <Link href={"https://github.com/rtfeldman/elm-css"}>elm-css </Link>,
        <Link href={"https://mdgriffith.gitbooks.io/style-elements/content/"}>
          {" "}
          elm-style-elements
        </Link>
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Tachyons is a GREAT fit
      </ListItem>
    </List>
  </Slide>
];

export default CSS;
