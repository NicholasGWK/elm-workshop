-- Full docs are here http://elm-lang.org/docs/syntax
-- This is how you comment in Elm!
-- Elm has several primitives: Number, Float, Bool, String, Record, List
{- Sometimes comments are
   multiline
-}


module Main exposing (..)

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



-- This is a List, not an Array. It is a linked list and does not have index lookup.


myList =
    [ "all items", "must be", "the same", "type" ]



-- It has tuples too!


myTuple =
    ( "firstPart", 12 )


threeTuple =
    ( 1, "two", [ "three" ] )



-- Also has Dicts and Arrays, as well as some side effect types, but we don't need those yet
--Functions are written with their name followed by the names of the arguments


multiplierFunction multiplier multiplicand =
    multiplier * multiplicand



-- Currying happens automatically!


multBy2 =
    multiplierFunction 2


six =
    multBy2 3



-- If statements are similar, but else is required


isNegative num =
    if num < 0 then
        True
    else
        False



-- Note the return is implicit
-- Elm has a pizza operator for forward function application! Super useful for pipe


isMinus4Negative =
    multBy2 -2 |> isNegative



-- The above is nicer for long functions than


result =
    isNegative (multBy2 -2)



-- Only douple equals for equality


isNick name =
    name == "Nick"



-- case statement is like switch but with very powerful pattern matching. _ is default case


simpleCase myString =
    case myString of
        "Nick is cool" ->
            False

        "Elm is cool" ->
            True

        _ ->
            True


advancedCase myList =
    case myList of
        [] ->
            "No items :("

        [ item ] ->
            if item.weight > 100 then
                "One large item!"
            else
                "One small item"

        items ->
            "Many items!"
