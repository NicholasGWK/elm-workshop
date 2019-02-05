-- Full docs are here http://elm-lang.org/docs/syntax
-- This is how you comment in Elm!
-- Elm has several primitives: Int, Float, Bool, String, Record, List
{- Sometimes comments are
   multiline
-}


module Main exposing
    ( advancedCase
    , alsoSixteen
    , isNick
    , multBy2
    , multiplierFunction
    , myBool
    , myFloat
    , myList
    , myNum
    , myRecord
    , myString
    , newRecord
    , otherRecord
    , simpleCase
    , six
    , sixteen
    )

import Html exposing (Html)
import Html.Attributes exposing (..)


myNum =
    12


myFloat =
    3.14


myBool =
    True


myString =
    "double quotes!"


myRecord =
    { prop1 = "a string"
    , prop2 = 12
    }



-- Update record


newRecord =
    { myRecord | prop1 = myRecord.prop1 ++ "test" }


otherRecord =
    { myRecord | prop2 = myRecord.prop2 + 5 }



-- This is a List, not an Array. It is a linked list and does not have index lookup.


myList =
    [ "all items", "must be", "the same", "type" ]



--Functions are written with their name followed by the names of the arguments


multiplierFunction multiplier multiplicand =
    multiplier * multiplicand



-- Currying happens automatically!


multBy2 =
    multiplierFunction 2


six =
    multBy2 3



-- The pizza operator pipes functions!


sixteen =
    4 |> multBy2 |> multBy2


alsoSixteen =
    multBy2 (multBy2 4)



-- If statements are similar, but else is required
-- Only douple equals for equality


isNick name =
    if name == "Nick" then
        True

    else
        False



-- case statement is like switch but with very powerful pattern matching. _ is default case


simpleCase aString =
    case aString of
        "Nick is cool" ->
            False

        "Elm is cool" ->
            True

        _ ->
            True


advancedCase aList =
    case aList of
        [] ->
            "No items :("

        [ item ] ->
            if item.height > 100 then
                "One tall item!"

            else
                "One not so tall item"

        items ->
            "Many items!"



-- No Variable shadowing!


someInt =
    12


functionWithInt someInt =
    someInt * 2
