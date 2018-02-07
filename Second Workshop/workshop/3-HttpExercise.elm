-- Using the previous example and the Json.Decode.at function, get the company
-- Catchphrase of user 1 from https://jsonplaceholder.typicode.com/users/1

module HttpExample exposing (..)

import Html exposing (Html, button, div, program, text)
import Html.Events exposing (onClick)
import Http exposing (Error, Request, get, send)
import Json.Decode exposing (Decoder, at, string)


type alias Model =
    String


type Msg = ??


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


jsonPlaceHolderUrl = ???


init : ( Model, Cmd Msg )
init =
    ( "", Cmd.none )


companyDecoder: Decoder String
companyDecoder = ???


fetchUserPhrase : Request String
fetchUserPhrase = ???


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model = ???


handleResponse : Result Error String -> String
handleResponse result = ???

view : Model -> Html Msg
view model = ??


main =
    program { init = init, view = view, update = update, subscriptions = subscriptions }
