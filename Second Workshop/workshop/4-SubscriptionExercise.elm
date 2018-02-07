-- Use Time.every to make a number tick up!
-- Time.every : Time -> (Time -> msg) -> Sub msg

module SubscriptionExercise exposing (..)

import Html exposing (Html, div, program, text)
import Time exposing (every, second)


type alias Model =
    Int


type Msg = ???


init : ( Model, Cmd Msg )
init =
    ( 0, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model = ???


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =


view : Model -> Html Msg
view model =


main =
    program { init = init, update = update, view = view, subscriptions = subscriptions }
