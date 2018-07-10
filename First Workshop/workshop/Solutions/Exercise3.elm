module SimpleCounter exposing (..)

import Html exposing (beginnerProgram, button, div, text)
import Html.Events exposing (onClick)


main =
    beginnerProgram { model = model, view = view, update = update }


model =
    0


update msg model =
    case msg of
        "Increment" ->
            model + 1

        "Decrement" ->
            model - 1

        _ ->
            model


view model =
    div []
        [ div [] [ model |> toString |> text ]
        , button [ onClick "Increment" ] [ text "Increment" ]
        , button [ onClick "Decrement" ] [ text "Decrement" ]
        ]
