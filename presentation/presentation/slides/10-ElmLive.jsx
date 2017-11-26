import React from "react";
import { Slide, Heading, List, ListItem, Link } from "spectacle";

const ElmLive = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Elm Development </Heading>
    <List>
      <ListItem textSize={34} padding={4}>
        elm-reactor is for simple Elm, need more for CSS
      </ListItem>
      <ListItem textSize={34} padding={4}>
        <Link href={"https://github.com/tomekwi/elm-live"}>elm-live</Link> for
        quick development,{" "}
        <Link href={"https://github.com/elm-community/elm-webpack-loader"}>
          elm-loader{" "}
        </Link>
        for webpack,{" "}
        <Link href={"https://github.com/evancz/react-elm-components"}>
          {" "}
          react-elm-components
        </Link>{" "}
        for React
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Use elm-reactor until you can't
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      CSS Example with elm-live
    </Heading>
  </Slide>
];

export default ElmLive;
