-- Convert The code from "The Problem" to use Union types for Msg

module FullApp exposing (..)

import Browser
import Html exposing (Html, button, div, input, text)
import Html.Events exposing (onClick)


type alias Model =
    { count : Int, searchText : String }


type Msg = ???


initModel : Model
initModel =
    { count = 0, searchText = "" }


update : Msg -> Model -> Model
update msg model =
    case msg.operation of
        "Increment" ->
            { model | count = model.count + msg.amount }

        "Decrement" ->
            { model | count = model.count - msg.amount }

        "Search" ->
            { model | searchText = msg.searchText }

        _ ->
            model


view : Model -> Html Msg
view model =
    div []
        [ div [] [ model |> toString |> text ]
        , button [ onClick { operation = "Increment", amount = 2 } ] [ text "Increment 2" ]
        , button [ onClick { operation = "Decrement", amount = 2 } ] [ text "Decerement 2" ]
        , button [ onClick { operation = "Search", searchText = "Elm tutorials!" } ] [ text "Search" ]
        , div [] [ text model.searchText ]
        ]


main =
    Browser.sandbox { initModel = initModel, view = view, update = update }
