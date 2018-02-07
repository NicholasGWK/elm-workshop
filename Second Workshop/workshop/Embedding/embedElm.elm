module Main exposing (..)

import Html exposing (Html, div, program, text)


type alias Model =
    String


init : ( Model, Cmd Msg )
init =
    ( "Hello from Elm!", Cmd.none )


type Msg
    = Nothing


update : Msg -> Model -> ( Model, Cmd a )
update msg model =
    model ! []



--Same as (model, Cmd.none)


view : Model -> Html Msg
view model =
    div [] [ text model ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main =
    program { init = init, view = view, update = update, subscriptions = subscriptions }
