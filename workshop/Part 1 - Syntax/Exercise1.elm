-- Create a record named myRecord with a bool, a float, and a string prop
-- Create a list of strings, named myList
{- Write a function called verifyName that takes a string and
   returns if the string is equal to your name
-}


module Main exposing (..)


myRecord =
    { myBool = True
    , myFloat = 3.12
    , myString = "A string!"
    }


myList =
    [ "some", "string" ]


verifyName myString =
    myString == "myName"
