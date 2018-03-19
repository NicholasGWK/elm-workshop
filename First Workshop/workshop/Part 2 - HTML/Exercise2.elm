-- HTML docs http://package.elm-lang.org/packages/elm-lang/html/latest/
-- Modify the HelloWorld example to make an unordered list with a few items
-- and an input/button combo at the bottom


module Exercise2 exposing (..)

import Html exposing (button, div, input, li, text, ul)


main =
    div []
        [ ul []
            [ li [] [ text "Item one" ]
            , li [] [ text "item 2" ]
            ]
        , input [] []
        , button [] [ text "Click me!" ]
        ]
