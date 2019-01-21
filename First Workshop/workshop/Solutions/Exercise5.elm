-- Write type annotations using type aliases where it makes sense


module Exercise5 exposing (Model, Msg, initModel, main, update, view)

import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


type alias Model =
    Int


type alias Msg =
    { operation : String, amount : Int }


initModel : Model
initModel =
    0


update : Msg -> Model -> Model
update msg model =
    case msg.operation of
        "Increment" ->
            model + msg.amount

        "Decrement" ->
            model - msg.amount

        _ ->
            model



-- Helpful hint: view: ??? -> Html ???


view : Model -> Html Msg
view model =
    div []
        [ div [] [ model |> String.fromInt |> text ]
        , button [ onClick { operation = "Increment", amount = 2 } ] [ text "Increment 2" ]
        , button [ onClick { operation = "Decrement", amount = 2 } ] [ text "Decerement 2" ]
        ]



-- Don't worry about this one


main =
    Browser.sandbox { init = initModel, view = view, update = update }
