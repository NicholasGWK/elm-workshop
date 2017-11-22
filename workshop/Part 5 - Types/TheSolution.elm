-- Write type annotations using type aliases where it makes sense


module Expanding exposing (..)

import Html exposing (Html, beginnerProgram, button, div, text)
import Html.Events exposing (onClick)


type alias Model =
    Int


type Msg
    = Increment Int
    | Decrement Int


model : Model
model =
    0


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment amt ->
            model + amt

        Decrement amt ->
            model - amt


view : Model -> Html Msg
view model =
    div []
        [ div [] [ model |> toString |> text ]
        , button [ onClick (Increment 2) ] [ text "Increment 2" ]
        , button [ onClick (Decrement 2) ] [ text "Decerement 2" ]
        ]


main =
    beginnerProgram { model = model, view = view, update = update }
