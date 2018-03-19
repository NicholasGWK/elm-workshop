-- Create a record named myRecord with a bool, a float, and a string prop
-- Create a list of strings, named myList
{- Write a function called verifyName that takes a string and
   returns if the string is equal to your name
-}


module Main exposing (..)


myRecord =
    { myBool = True
    , myFloat = 31.2
    myString = "Something"
    }


myList =
    [ "some", "string" ]


verifyName name =
    if name == "Nick" then
        True
    else
        False
