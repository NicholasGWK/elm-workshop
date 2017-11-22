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
  </Slide>
];

export default TypeAliases;
