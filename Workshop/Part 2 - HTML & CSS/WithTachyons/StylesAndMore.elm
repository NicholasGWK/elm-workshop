module Main exposing (..)

import Html exposing (Html, div, h1, li, text, ul)
import Html.Attributes exposing (class, id)


main =
    div
        [ class "flex w-100 h-100 justify-center items-center" ]
        [ div [ class "flex-column" ]
            [ h1 [ class "green" ] [ text "This is a cool list" ]
            , ul [ class "list tc pa0 ma0" ]
                [ li [] [ text "First Item" ]
                , li [] [ text "Second Item" ]
                , li [] [ text "Third Item" ]
                ]
            ]
        ]
