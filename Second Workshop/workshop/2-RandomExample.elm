-- See http://package.elm-lang.org/packages/elm-lang/core/latest/Random


module RandomExample exposing (..)

import Html exposing (Html, button, div, program, text)
import Html.Events exposing (onClick)
import Random exposing (bool, generate)


type alias Model =
    Bool


type Msg
    = Flip
    | TossResult Bool


init : ( Model, Cmd Msg )
init =
    ( False, Cmd.none )



-- Remember TossResult is now a constructor so TossResult: Bool -> TossResult Bool
-- So it will work for our (a -> Msg) function that Random.generate needs


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Flip ->
            ( model, Random.generate TossResult Random.bool )

        TossResult flip ->
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
