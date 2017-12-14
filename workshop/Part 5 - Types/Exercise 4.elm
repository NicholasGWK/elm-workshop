--Add type annotations!


module Exercise4 exposing (..)

import Html exposing (Html, beginnerProgram, button, div, text)
import Html.Events exposing (onClick)


model : Int
model =
    0


update : String -> Int -> Int
update msg model =
    case msg of
        "Increment" ->
            model + 1

        _ ->
            model


view : Int -> Html String
view model =
    div []
        [ div [] [ model |> toString |> text ]
        , button [ onClick "Increment" ] [ text "Increment" ]
        ]



-- Don't worry about this one


main =
    beginnerProgram { model = model, view = view, update = update }
