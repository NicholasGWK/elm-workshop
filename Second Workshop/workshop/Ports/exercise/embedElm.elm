-- Use this and Websocket.send/listen to create a "chatbot"
-- The merely echoes back what you type with a question
-- Ports are just for your "username"
-- WebSocket docs: http://package.elm-lang.org/packages/elm-lang/websocket/latest/WebSocket


port module Main exposing (..)

import Html exposing (Html, button, div, input, program, text)
import Html.Attributes exposing (placeholder, value)
import Html.Events exposing (onClick, onInput)


type alias Model =
    String


init : ( Model, Cmd Msg )
init =
    ( "", Cmd.none )


type Msg
    = UpdateUsername String
    | SaveUserName


update : Msg -> Model -> ( Model, Cmd a )
update msg model =
    case msg of
        UpdateUsername str ->
            ( str, Cmd.none )

        SaveUserName ->
            ( model, saveUserName model )


port saveUserName : String -> Cmd msg


port userNameFromLocalStorage : (String -> msg) -> Sub msg



--Same as (model, Cmd.none)


view : Model -> Html Msg
view model =
    div []
        [ input [ onInput UpdateUsername, placeholder "Enter your username", value model ] []
        , button [ onClick SaveUserName ] [ text "Save in Local Storage" ]
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    userNameFromLocalStorage UpdateUsername


main =
    program { init = init, view = view, update = update, subscriptions = subscriptions }
