# Rangle Elm-Workshop

### Prerequisites

Before attending the workshop, please install the elm platform, elm-format, and
integrate these with your editor of choice. This will help us jump right in!

### Install platform and elm-format

`yarn global add elm elm-format`

`npm install -g elm elm-format`

### Integrate with VSCode

* Install the Elm plugin from the marketplace. That's it!
* I recommend setting `"elm.formatOnSave": true` in your settings to format on
  save

### Integrate with Atom

* Install elm-format package
* Install language-elm package
* Install linter + linter-elm-make packages. You may get an error about linter +
  diagnostics if you are using atom-ide packages. Unfortunately you must leave
  both enable as there is not yet an elm-ide package.
* Optionally install elmjustu, which provides great autocomplete

### Integrate with other editors

`¯\_( ツ )_/¯`

Mostly it's important to get elm-make running automatically on save to see
compile errors in your editor in real-time, and to have elm-format run to make
your code look nice

## Resources

* Elm has [an official guide](https://guide.elm-lang.org/) that goes through
  many topics in this workshop and more. It is a highly recommended read!

* https://elm.reddit.com is very active and beginner friendly!
* https://elmlang.herokuapp.com/ Elm slack is much the same

## Workshops Links

### Part 1 - Syntax

* [Official Elm Syntax Documentation](http://elm-lang.org/docs/syntax)

### Part 2 & 3 - Rendering HTML + CSS

* [elm-html package](http://package.elm-lang.org/packages/elm-lang/html/latest/)

* [elm-tachyons](http://package.elm-lang.org/packages/justgage/tachyons-elm/latest/Tachyons)
* [elm-style-elements](http://package.elm-lang.org/packages/mdgriffith/style-elements/latest)

* [elm-css](https://github.com/rtfeldman/elm-css)
* [elm-live dev server](https://github.com/tomekwi/elm-live)
* [Tachyons!](http://tachyons.io/)

### Part 4 & 5

* See elm-guide and official elm documentation
