module SimpleCounter exposing (..)

import Html exposing (Html, beginnerProgram, button, div, text)
import Html.Events exposing (onClick)


model =
    0


update msg model =
    case msg of
        "Increment" ->
            model + 1

        _ ->
            model


view model =
    div []
        [ div [] [ model |> toString |> text ]
        , button [ onClick "Increment" ] [ text "Increment" ]
        ]


main =
    beginnerProgram { model = model, view = view, update = update }
