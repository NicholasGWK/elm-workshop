import React from "react";
import { Slide, Heading, List, ListItem, Code } from "spectacle";

const TypeAnnotations = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Type Annotations </Heading>
    <List>
      <ListItem textSize={34} padding={5}>
        Elm infers all types, but we can make them explicit
      </ListItem>
      <ListItem textSize={34} padding={5}>
        More readability and verification of our ideas
      </ListItem>
      <ListItem textSize={34} padding={5}>
        Elm uses Hindley Milner or H-M style
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} padding={48}>
      Type Annotations
    </Heading>
    <Code textSize={36}>{"triple: Int -> Int"}</Code>
    <List>
      <ListItem textSize={34} padding={5}>
        triple matches the name of the function
      </ListItem>
      <ListItem textSize={34} padding={5}>
        The : means "has type"
      </ListItem>
      <ListItem textSize={34} padding={5}>
        -> separates arguments, the last one is the return value
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} padding={48}>
      Type Annotations
    </Heading>
    <Code textSize={36}>{"List.map: (a -> b) -> List a -> List b"}</Code>
    <List>
      <ListItem textSize={32} padding={5}>
        Brackets indicate the argument is a function
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Lowercase letters mean "any"
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Here a and b can be different
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Map takes a function that maps a to b and a List of a
      </ListItem>
      <ListItem textSize={32} padding={5}>
        It returns a List of b
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Exercise 4 - Add type annotations
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} padding={48}>
      Type Annotations
    </Heading>
    <List>
      <ListItem textSize={32} padding={5}>
        How do we annotate records? (Msgs)
      </ListItem>
      <ListItem textSize={32} padding={5}>
        We can do it inline, but lots of duplication
      </ListItem>

      <Code textSize={24}>
        {"update: { operation: String, amount: Int } -> Int -> Int"}
      </Code>
    </List>
  </Slide>
];

export default TypeAnnotations;
