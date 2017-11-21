module Expanding exposing (..)

import Html exposing (Html, beginnerProgram, button, div, text)
import Html.Events exposing (onClick)


model =
    { count = 0, message = "Pretty small!" }


update msg model =
    case msg.operation of
        "Increment" ->
            { model | count = model.count + msg.amount }

        _ ->
            model


view model =
    div []
        [ div [] [ model.count |> toString |> text ]
        , button [ onClick { operation = "Increment", amount = 2 } ] [ text "Increment 2" ]
        , div [] [ text model.message ]
        ]


main =
    beginnerProgram { model = model, view = view, update = update }
