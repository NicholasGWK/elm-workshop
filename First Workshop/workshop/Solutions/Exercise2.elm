-- HTML docs http://package.elm-lang.org/packages/elm-lang/html/latest/
-- Modify the HelloWorld example to make an unordered list with a few items
-- and an input/button combo at the bottom


module Exercise2 exposing (..)

import Html exposing (button, div, input, li, text, ul)

-- Type is a reserved keyword in elm, so for buttons etc we use _type
import Hmtl.Attributes exposing (_type)

main =
    div []
        [ ul []
            [ li [] [ text "Hi!" ]
            , li [] [ text "Hello!" ]
            ]
        , button [] [ text "Click!" ]
        , input [_type "text"] []
        ]
