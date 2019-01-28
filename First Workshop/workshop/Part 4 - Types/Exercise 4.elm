--Add type annotations!


module Exercise4 exposing (..)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


initModel =
    0

update msg model =

view: ??? -> Html ???
view model =


-- Don't worry about this one


main =
    Browser.sandbox { initModel = initModel, view = view, update = update }
