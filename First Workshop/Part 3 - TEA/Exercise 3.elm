-- Take the simple counter example and implement a decrement button


module Exercise3 exposing (..)

import Browser
import Html exposing (button, div, text)
import Html.Events exposing (onClick)


main =
    Browser.sandbox { init = initModel, view = view, update = update }


initModel =
    
update msg model =

view model =
