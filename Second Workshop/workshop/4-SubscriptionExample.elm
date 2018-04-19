-- See http://package.elm-lang.org/packages/elm-lang/mouse/1.0.1/Mouse#moves


module SubscriptionExample exposing (..)

import Html exposing (Html, div, program, text)
import Mouse exposing (Position, moves)


type alias Model =
    Position


type Msg
    = NewPosition Position


init : ( Model, Cmd Msg )
init =
    ( Position 0 0, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    moves NewPosition


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NewPosition pos ->
            ( pos, Cmd.none )


view : Model -> Html Msg
view model =
    div [] [ toString model |> text ]


main =
    program { init = init, update = update, view = view, subscriptions = subscriptions }
