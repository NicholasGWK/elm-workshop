module FullApp exposing (..)

import Html exposing (Html, button, div, program, text)
import Html.Events exposing (onClick)
import Random exposing (..)
import Time exposing (..)


type alias Model =
    { result : Int, timer : Int }


type Msg
    = Update Int
    | Roll
    | Tick


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every second (\_ -> Tick)


model : Model
model =
    { result = 0, timer = 0 }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Update num ->
            { model | result = num } ! []

        Roll ->
            ( model, Random.generate Update (Random.int 1 6) )

        Tick ->
            { model | timer = model.timer + 1 } ! []


view : Model -> Html Msg
view model =
    div []
        [ text (toString model.result)
        , text (toString model.timer)
        , button [ onClick Roll ] [ text "Roll!" ]
        ]


main : Program Never Model Msg
main =
    program { init = ( model, Cmd.none ), update = update, view = view, subscriptions = subscriptions }
