import React from "react";
import {
  Slide,
  Heading,
  List,
  ListItem,
  Image,
  CodePane,
  Code,
  Text
} from "spectacle";
import elmSnippet from "../../assets/codeSnippets/08-elm-snippet.example";
import programSnippet from "../../assets/codeSnippets/HtmlProgram.example";
import Elm from "../../assets/images/Elm.png";
import ElmTEA from "../../assets/images/ElmTEA.svg";
import RunTimeCommand from "../../assets/images/ElmRuntime.svg";
import httpSnippet from "../../assets/codeSnippets/httpSnippet.example";
import fetchSnippet from "../../assets/codeSnippets/fetchSnippet.example";
const Recap = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Outline
    </Heading>
    <List textSize={36}>
      <ListItem textSize={36} padding={4}>
        Recap
      </ListItem>
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
        Ports
      </ListItem>
    </List>
  </Slide>,
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
      Recap Exercise!
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Side Effects
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Commands - What are they?
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Side Effects are Data
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
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Great, but...
    </Heading>
    <Text textColor={"secondary"}> What's our most common side effect? </Text>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Http is more complicated!
    </Heading>
    <List textSize={36}>
      <ListItem textSize={36} padding={4}>
        May need to build complex requests
      </ListItem>
      <ListItem textSize={36} padding={4}>
        The request can fail or error
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Return value must be decoded (text, JSON)
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Decoding can fail or error
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      What do we use in JS?
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Fetch in JS
    </Heading>
    <CodePane margin={20} textSize={28} lang="jsx" source={fetchSnippet} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Elm has us covered
    </Heading>
    <List textSize={36}>
      <ListItem textSize={36} padding={4}>
        elm-http for building Requests
      </ListItem>
      <ListItem textSize={36} padding={4}>
        Result type to handle errors
      </ListItem>
      <ListItem textSize={36} padding={4}>
        JSON decoders to handle response
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Http
    </Heading>
    <CodePane margin={20} textSize={25} lang="jsx" source={httpSnippet} />
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}>Random.generate vs Http.send</Heading>
    <Code textSize={24}>generate : (a -> msg) -> Generator a -> Cmd msg</Code>
    <br />
    <Code textSize={24}>
      send: (Result Http.Error a -> msg) -> Request a -> Cmd msg
    </Code>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Http Example
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Http Exercise
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Subscriptions - What are they?
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Subscriptions
    </Heading>
    <List textSize={36}>
      <ListItem textSize={32} padding={4}>
        Subscriptions let us listen to things of interest
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Elm runtime creates messages when things happen
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Basically just observables
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Also represented as data!
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}>Mouse.moves</Heading>
    <Code textSize={30}> moves : (Position -> msg) -> Sub msg</Code>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Subscription Example
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Subscription Exercise
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Deploying Elm
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Elm compiles to JS
    </Heading>
    <List textSize={36}>
      <ListItem textSize={32} padding={4}>
        elm-reactor takes away complexity but is limited
      </ListItem>
      <ListItem textSize={32} padding={4}>
        No webpack solution is elm make
      </ListItem>
      <ListItem textSize={32} padding={4}>
        <Code textSize={28}>elm-make src/Main.elm --output=main.js</Code>
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Embedding gives us JS interop
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Embedding example
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      More advanced embedding
    </Heading>
    <List textSize={36}>
      <ListItem textSize={32} padding={4}>
        Compile to JS is the basis
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Can use webpack, elm-loader
      </ListItem>
      <ListItem textSize={32} padding={4}>
        There is a react component which takes src
      </ListItem>
      <ListItem textSize={32} padding={4}>
        The more important part is it allows Ports!
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Ports
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      Ports - Talk to JS
    </Heading>
    <List textSize={36}>
      <ListItem textSize={32} padding={4}>
        Elm is amazing, but sometimes we need JS
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Librararies with no equivalent (AWS Cognito)
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Parts of the HTML spec (localStorage)
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Gradual Adoption/ Service workers / PWAs
      </ListItem>
    </List>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Text textColor={"tertiary"}>
      We need Elm to send values to JS and listen for values sent in
    </Text>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Text textColor={"tertiary"}>I wonder what we can use...</Text>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Text textColor={"tertiary"}>Subscriptions into Elm, Cmds out to JS!</Text>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Ports Example
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="tertiary" caps>
      Full Exercise
    </Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>
      What's left?
    </Heading>
    <List textSize={36}>
      <ListItem textSize={32} padding={4}>
        Not much!
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Advanced Decoders, Data Structures
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Routing
      </ListItem>
      <ListItem textSize={32} padding={4}>
        Architecture
      </ListItem>
    </List>
  </Slide>
];

export default Recap;
