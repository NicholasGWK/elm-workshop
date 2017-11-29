-- Take the simple counter example and implement a decrement button


module Exercise3 exposing (..)

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

        _ ->
            model


view model =
    div []
        [ div [] [ model |> toString |> text ]
        , button [ onClick "Increment" ] [ text "Increment" ]
        ]
