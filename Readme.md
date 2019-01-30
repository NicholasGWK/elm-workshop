# Rangle Elm-Workshop

### Prerequisites

Before attending the workshop, please clone this repo, install the elm platform,
elm-format, and integrate these with your editor of choice. This will help us
jump right in!

### Install platform and elm-format

**NOTE**

There can be some _weirdness_ installing elm with yarn/npm and integrating
with you editor if you use npm + nvm + VSCode due to some path stuff.

Your best bet is to install the binaries to /usr/local/bin instead, and make sure that's on your path ( if you can run elm / elm-format from the command line, you're good!)

If that fails, try the accepted method of `npm install -g elm elm-format`

- [Elm 0.19 installer for Mac](https://github.com/elm/compiler/releases/download/0.19.0/installer-for-mac.pkg)
- [elm-format binary for Mac](https://github.com/avh4/elm-format/releases/download/0.8.1/elm-format-0.8.1-mac-x64.tgz)

### Integrate with VS Code

- Install the Elm language support from the marketplace.
- [ Then follow this](https://github.com/avh4/elm-format/tree/0.8.1#visual-studio-code-installation)

### Integrate with Atom

- Install language-elm package
- Install elm-format package
- Install elmjutsu for autocomplete (do not follow the default instructions for language-elm, won't work for 0.19)

### Integrate with other editors

`:grimace:` I have no idea :P.

Mostly it's important to get elm-make running automatically on save to see
compile errors in your editor in real-time, and to have elm-format run to make
your code look nice

## Resources

- Elm has [an official guide](https://guide.elm-lang.org/) that goes through
  many topics in this workshop and more. It is a highly recommended read!

- https://elm.reddit.com is very active and beginner friendly!
- https://elmlang.herokuapp.com/ Elm slack is much the same

## Workshops Links

### Part 1 - Syntax

- [Official Elm Syntax Documentation](http://elm-lang.org/docs/syntax)
- [Elm vs JS quick comparison](http://elm-lang.org/docs/from-javascript)

### Part 2 & 3 - Rendering HTML + CSS

- [elm/html package](http://package.elm-lang.org/packages/elm/html/latest/)

- [elm tachyons](https://package.elm-lang.org/packages/justgage/tachyons-elm/latest/)
- [elm-style-elements](http://package.elm-lang.org/packages/mdgriffith/style-elements/latest)

- [elm-css](https://github.com/rtfeldman/elm-css)
- [elm-live dev server](https://github.com/tomekwi/elm-live)
- [Tachyons!](http://tachyons.io/)

### Part 4 & 5

- See [elm-guide]((https://guide.elm-lang.org/) and (official elm
  documentation)[http://elm-lang.org/docs]
