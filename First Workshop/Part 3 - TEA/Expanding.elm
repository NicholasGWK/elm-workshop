module Expanding exposing (initModel, main, update, view)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


main =
    Browser.sandbox { init = initModel, view = view, update = update }


initModel =
    0



-- msgs now look like this { operation = "Increment", amount = 2}


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
        [ div [] [ model |> String.fromInt |> text ]
        , button [ onClick { operation = "Increment", amount = 2 } ] [ text "Increment 2" ]
        , button [ onClick { operation = "Decrement", amount = 2 } ] [ text "Decerement 2" ]
        ]
