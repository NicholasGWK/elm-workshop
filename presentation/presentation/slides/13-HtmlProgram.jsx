import React from "react";
import { Slide, Heading, Text, Code, List, ListItem } from "spectacle";

const HTMLProgram = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Html.beginnerProgram </Heading>
    <Text>Since TEA is part of Elm, it's all built in to elm-html! </Text>
    <Code textSize={22}>
      {"Html.beginnerProgram { model = model, view = view, update = update }"}
    </Code>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> The args </Heading>
    <List>
      <ListItem textSize={34} padding={5}>
        Model: What is the intial value of your model?
      </ListItem>
      <ListItem textSize={34} padding={5}>
        Update: Takes a Msg, a Model, returns a Model
      </ListItem>
      <ListItem textSize={34} padding={5}>
        View: Takes a Model, and returns Html
      </ListItem>
      <ListItem textSize={34} padding={5}>
        The initial model must capture the full app state
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Example - Simple Counter app!
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Exercise 3 - Our first app
    </Heading>
  </Slide>
];

export default HTMLProgram;
