import React from "react";
import { Slide, CodePane, Heading } from "spectacle";
import reactSnippet from "../../assets/codeSnippets/08-react-snippet.example";
import elmSnippet from "../../assets/codeSnippets/08-elm-snippet.example";
const HTMLDemo = [
  <Slide bgColor="primary" textColor="tertiary">
    <Heading size={6}> React </Heading>
    <CodePane margin={10} textSize={28} lang="jsx" source={reactSnippet} />
  </Slide>,
  <Slide>
    <Heading size={6}> Elm </Heading>
    <CodePane margin={10} textSize={28} lang="jsx" source={elmSnippet} />
  </Slide>
];

export default HTMLDemo;
