-- Convert The code from "The Problem" to use Union types for Msg


module FullApp exposing (..)

import Html exposing (Html, beginnerProgram, button, div, input, text)
import Html.Events exposing (onClick)


type alias Model =
    { count : Int, searchText : String }


type Msg
    = Increment Int
    | Decrement Int
    | Search String


model : Model
model =
    { count = 0, searchText = "" }


update : Msg -> Model -> Model
update msg model =
    case msg.operation of
        Increment int ->
            { model | count = model.count + int }

        Decrement int ->
            { model | count = model.count - int }

        Search str ->
            { model | searchText = str }

        _ ->
            model


view : Model -> Html Msg
view model =
    div []
        [ div [] [ model |> toString |> text ]
        , button [ onClick (Increment 2) ] [ text "Increment 2" ]
        , button [ onClick (Decrement 2) ] [ text "Decrement 2" ]
        , button [ onClick (SearchText "Works!") ] [ text "Search" ]
        , div [] [ text model.searchText ]
        ]


main =
    beginnerProgram { model = model, view = view, update = update }
