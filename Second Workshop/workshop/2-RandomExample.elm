module RandomExample exposing (..)

import Html exposing (Html, button, div, program, text)
import Html.Events exposing (onClick)
import Random exposing (bool, generate)


type alias Model =
    Bool


type Msg
    = Flip
    | NewToss Bool


init : ( Model, Cmd Msg )
init =
    ( False, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Flip ->
            ( model, Random.generate NewToss Random.bool )

        NewToss flip ->
            ( flip, Cmd.none )


boolToCoin : Bool -> String
boolToCoin flip =
    case flip of
        True ->
            "Heads"

        False ->
            "Tails"


view : Model -> Html Msg
view model =
    div []
        [ div [] [ model |> boolToCoin |> text ]
        , button [ onClick Flip ] [ text "Flip a coin!" ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main =
    program { init = init, view = view, update = update, subscriptions = subscriptions }
