module TheProblem exposing (Model, Msg, initModel, main, update, view)

import Browser
import Html exposing (Html, button, div, input, text)
import Html.Events exposing (onClick, onInput)


type alias Model =
    { count : Int, searchText : String }


type Msg
    = Increment Int
    | Decrement Int
    | UpdateSearch String


initModel : Model
initModel =
    { count = 0, searchText = "" }


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment inc ->
            { model | count = model.count + inc }

        Decrement dec ->
            { model | count = model.count - dec }

        UpdateSearch str ->
            { model | searchText = str }


view : Model -> Html Msg
view model =
    div []
        [ div [] [ model.count |> String.fromInt |> text ]
        , button [ onClick (Increment 2) ] [ text "Increment 2" ]
        , button [ onClick (Decrement 2) ] [ text "Decerement 2" ]
        , div [] [ input [ onInput UpdateSearch ] [ text "Search" ] ]
        , div [] [ text ("Search Text: " ++ model.searchText) ]
        ]


main =
    Browser.sandbox { init = initModel, view = view, update = update }
