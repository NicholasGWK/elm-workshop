-- Write type annotations using type aliases where it makes sense


module Expanding exposing (..)

import Html exposing (Html, beginnerProgram, button, div, text)
import Html.Events exposing (onClick)


model =
    0


update msg model =
    case msg.operation of
        "Increment" ->
            model + msg.amount

        "Decrement" ->
            model - msg.amount

        _ ->
            model


view model =
    div []
        [ div [] [ model |> toString |> text ]
        , button [ onClick { operation = "Increment", amount = 2 } ] [ text "Increment 2" ]
        , button [ onClick { operation = "Decrement", amount = 2 } ] [ text "Decerement 2" ]
        ]


main =
    beginnerProgram { model = model, view = view, update = update }
