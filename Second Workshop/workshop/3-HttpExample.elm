module Main exposing (..)

import Html exposing (Html, button, div, program, text)
import Html.Events exposing (onClick)
import Http exposing (Error, Request, get, send)
import Json.Decode exposing (Decoder, field, string)


type alias Model =
    String


type Msg
    = FetchTitle
    | TitleResponse (Result Error String)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


jsonPlaceHolderUrl =
    "https://jsonplaceholder.typicode.com/posts/1"


init : ( Model, Cmd Msg )
init =
    ( "", Cmd.none )


titleDecoder : Decoder String
titleDecoder =
    field "title" string


fetchTitleRequest : Request String
fetchTitleRequest =
    Http.get jsonPlaceHolderUrl titleDecoder


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FetchTitle ->
            ( model, Http.send TitleResponse fetchTitleRequest )

        TitleResponse response ->
            ( handleResponse response, Cmd.none )


handleResponse : Result Error String -> String
handleResponse result =
    case result of
        Ok title ->
            title

        Err err ->
            "Failed to fetch title"


view : Model -> Html Msg
view model =
    div []
        [ button
            [ onClick FetchTitle ]
            [ text "Get the title!" ]
        , div [] [ "Got title: " ++ model |> text ]
        ]


main =
    program { init = init, view = view, update = update, subscriptions = subscriptions }
