import React from "react";
import { Slide, Heading, List, ListItem, S, Code, Image } from "spectacle";

import dynamite from "../../assets/images/dynamite.png";

const TypeAliases = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Union Types </Heading>
    <List padding={30}>
      <ListItem textSize={32} padding={5}>
        Represent a value that can be one of n types
      </ListItem>
      <ListItem textSize={32} padding={5}>
        This OR That OR Foo
      </ListItem>
      <ListItem textSize={32} padding={5}>
        <S type="italic">Similar</S> to an Enum
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Can we think of anything in Elm that follows this?
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Booleans </Heading>
    <Code textSize={30}> type Bool = True | False </Code>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Union Types </Heading>
    <List padding={30}>
      <ListItem textSize={32} padding={5}>
        Union types in Elm are Tagged Unions
      </ListItem>
      <ListItem textSize={32} padding={5}>
        This means you can have a base type (tag) that is different
      </ListItem>
      <ListItem textSize={32} padding={5}>
        But you can also have data associated with that type
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Can we think of anything in Elm that follows this?
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Remember this? </Heading>
    <Code textSize={30}> view: Model -> Html String </Code>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Tagged Union</Heading>
    <List padding={30}>
      <ListItem textSize={32} padding={5}>
        Html String means the Html type has a second param String
      </ListItem>
      <ListItem textSize={32} padding={5}>
        You could have a union type of different types that may or may not have
        data
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Does this sound like anything we've used?
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> ?!?</Heading>
    <Image src={dynamite} width={400} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Tagged Unions = Msg</Heading>
    <List>
      <ListItem textSize={32} padding={5}>
        Tagged Unions are perfect for Msgs!
      </ListItem>
      <ListItem textSize={32} padding={5}>
        The have a main "operation" type, and then optionally some data
      </ListItem>
      <ListItem textSize={32} padding={5}>
        Cleans up our code immensely!
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Tagged Unions = Msg</Heading>
    <Code textSize={30}>type Msg = Increment Int | Search String | Reset</Code>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      The Solution Example!
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Exercise 6 - A full app!
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Thanks!
    </Heading>
  </Slide>
];

export default TypeAliases;
