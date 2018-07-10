--Add type annotations!


module Exercise4 exposing (..)

import Html exposing (Html, beginnerProgram, button, div, text)
import Html.Events exposing (onClick)

model : Int
model =
    0

update: String - > Int -> Int
update msg model =

view: Int -> Html Int
view model =



main =
    beginnerProgram { model = model, view = view, update = update }
