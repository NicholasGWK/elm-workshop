-- Write an elm program that reverses a string when you type into an input

module RecapExercise exposing (..)

import Html exposing (Html, beginnerProgram, input, div, text)
import Html.Events exposing (onInput)


type alias Model =


type Msg =


model : Model
model =

update : Msg -> Model -> Model
update msg model =



view : Model -> Html Msg
view model =



main =
    beginnerProgram { model = model, view = view, update = update }
