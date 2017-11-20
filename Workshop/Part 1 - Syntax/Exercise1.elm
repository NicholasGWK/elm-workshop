-- Create a record with a bool, a float, and a string prop
-- Create a list of strings
-- Create a tuple of type (string, number)
-- Write a function verify that takes a string and returns if the string is equal to your name
-- Combine two strings using the concat operator ++ and use forward function application |> to
-- pass it to the function you just wrote
-- Guess what the two lines below do :)


module Main exposing (..)


myRecord =
    { firstProp = "test" }


newRecord =
    { myRecord | firstProp = "switched" }
