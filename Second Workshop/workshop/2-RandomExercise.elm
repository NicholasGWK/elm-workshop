-- Based on random example, write a program that rolls a die!
-- Use Random.int http://package.elm-lang.org/packages/elm-lang/core/latest/Random#int
module RandomExercise exposing (..)

import Html exposing (Html, button, div, program, text)
import Html.Events exposing (onClick)
import Random exposing (generate, int)


type alias Model =


type Msg


init : ( Model, Cmd Msg )
init =

-- Random.int: Int -> Int -> Generator Int
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of


view : Model -> Html Msg
view model =


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main =
    program { init = init, view = view, update = update, subscriptions = subscriptions }
