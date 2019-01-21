-- Create a record named myRecord with a bool, a float, and a string prop
-- Create a list of strings, named myList
{- Write a function called verifyName that takes a string and
   returns if the string is equal to your name
-}


module Main exposing (myList, myRecord, verifyName)


myRecord =
    { myBool = True
    , myFloat = 3.14
    , myString = "Hello"
    }


myList =
    [ "Hello", "World" ]


verifyName name =
    if name == "Nick" then
        True

    else
        False
