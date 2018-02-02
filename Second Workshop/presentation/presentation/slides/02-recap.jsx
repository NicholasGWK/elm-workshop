import React from "react";
import {
  Slide,
  Heading,
  List,
  ListItem,
  Image,
  CodePane,
  Code
} from "spectacle";
import elmSnippet from "../../assets/codeSnippets/08-elm-snippet.example";
import programSnippet from "../../assets/codeSnippets/HtmlProgram.example";
import Elm from "../../assets/images/Elm.png";
import ElmTEA from "../../assets/images/ElmTEA.svg";
import RunTimeCommand from "../../assets/images/ElmRuntime.svg";
const Recap = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Ugh, Part 1 was SOOOOO long ago
    </Heading>
    <List textSize={36}>
      <ListItem textSize={36} padding={4}>
        Syntax
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Render and style static HTML
      </ListItem>
      <ListItem textSize={36} padding={4}>
        The Elm Architecture(TEA) - building webapps
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Expanding Apps (with types!)
      </ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading size={6}> Elm </Heading>
    <CodePane margin={10} textSize={28} lang="jsx" source={elmSnippet} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> TEA </Heading>
    <Image src={Elm} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> Tagged Unions = Msg</Heading>
    <Code textSize={30}>type Msg = Increment Int | Search String | Reset</Code>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Recap example + Exercise!
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Outline
    </Heading>
    <List textSize={36}>
      <ListItem textSize={36} padding={4}>
        Commands
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Subscriptions
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Deploying Elm
      </ListItem>
      <ListItem textSize={36} padding={4}>
        JS...and ports!
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      What are commands?
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Side Effects = Data
    </Heading>
    <List textSize={36}>
      <ListItem textSize={34} padding={4}>
        In Elm, we can't perform side effects
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Describe what we want, Elm runtime does it
      </ListItem>
      <ListItem textSize={34} padding={4}>
        Just like virtual DOM vs DOM mutation
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Create Cmds with functions, return them in update
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> TEA </Heading>
    <Image src={ElmTEA} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> TEA - Cmds and Subs</Heading>
    <Image src={RunTimeCommand} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Not beginners anymore!
    </Heading>
    <CodePane margin={20} textSize={28} lang="jsx" source={programSnippet} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      First side effect - Random stuff!
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}>Random.generate</Heading>
    <Code textSize={30}>generate : (a -> msg) -> Generator a -> Cmd msg</Code>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Generator example - Coin flip!
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Random Number Exercise
    </Heading>
    <Code textSize={30}> Random.int: Int -> Int -> Generator Int </Code>
  </Slide>
];

export default Recap;
