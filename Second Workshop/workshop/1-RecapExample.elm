module RecapExample exposing (..)

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
        , button [ Increment 2 |> onClick ] [ text "Increment 2" ]
        , button [ Decrement 2 |> onClick ] [ text "Decerement 2" ]
        ]


main =
    beginnerProgram { model = model, view = view, update = update }
