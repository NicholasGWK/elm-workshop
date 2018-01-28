import React from "react";
import { Slide, Heading, List, ListItem, Code, Layout, Fill } from "spectacle";

const TypeAliases = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Enter Type Aliases! </Heading>
    <List padding={30}>
      <ListItem textSize={32} padding={5}>
        Type aliases let us alias a type as a word
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Makes record types reusable or provides app context
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Enter Type Aliases! </Heading>
    <List padding={30}>
      <Layout>
        <Fill>
          <Code textSize={26}>
            {"type alias Msg = { operation: String, amount: Int }"}
          </Code>
        </Fill>
      </Layout>
      <Layout>
        <Fill>
          <Code textSize={26}>{"type alias Model = Int"}</Code>
        </Fill>
      </Layout>
      <Layout>
        <Fill>
          <Code textSize={26}>{"update: Msg -> Model -> Model"}</Code>
        </Fill>
      </Layout>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Exercise 5 - Use type aliases
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> The Problem with more Msgs</Heading>
    <List padding={30}>
      <ListItem textSize={32} padding={5}>
        Aliases work well when Msgs have the same properties
      </ListItem>
      <ListItem textSize={32} padding={5}>
        What happens when they don't?
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      The Problem Example
    </Heading>
  </Slide>
];

export default TypeAliases;
