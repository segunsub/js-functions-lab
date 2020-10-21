# Unit 2 Lesson 3 Problem Set

## Making the Test Pass
* The Unit Tests are located in `answers.test.js`. You can look inside that file. It's not magic. 🧙🏾‍♂️
* In order for me to accept your submission, all of my tests must pass.
    1. From this project's **root directory** (not this current directory), install the test with `npm install`. (Do this only one time)
    2. Run your test with `npm test`. (Run this command often to see if your functions are passing)

## Problem Set 2.3 - Coding Exercises

1. Write a function that takes a name and **returns** a greeting with `"Hello"` and the person's name.

    Example:
    ```javascript
    hello("Carmen"); // "Hello, Carmen!"
    hello("Devonte"); // "Hello, Devonte!"
    hello("Reuben Ogbonna"); // "Hello, Reuben Ogbonna!"
    ```

2. Write a function that **logs** all even numbers from 0 to 50, inclusive, to the console. Log all numbers on separate lines.

    Example:
    ```javascript
    logEvenNumbers();

    // 0
    // 2
    // 4
    .
    .
    .
    // 48
    // 50
    ```

3. Write a function that takes in two numbers and returns the product (multiple those numbers together):

    Examples:
    ```javascript
    multiply(5, 7); // 35
    multiply(15, 10); // 150
    multiply(25.75, 42); // 1081.5
    ```

4. Write a function that returns the sum of all numbers between 1 and some other number, inclusive, that are multiples of 2 or 5. For example, if the supplied number is 17, the result should be 92 (2 + 4 + 5 + 6 + 8 + 10 + 12 + 14 + 15 + 16).

    You may assume that the number passed in is an integer greater than 1.

    Examples:
    ```javascript
    multisum(13); //47
    multisum(17); //92 
    ```
    
5. Write a function that takes one argument, a positive integer, and returns a string of alternating `'X'`s and `'O'`s, always starting with a `'X'`. The length of the string should match the given integer.

    Examples:
    ```javascript
    stringy(6);    // "XOXOXO"
    stringy(9);    // "XOXOXOXOX"
    stringy(4);    // "XOXO"
    stringy(7);    // "XOXOXOX"
    ```

## Challenge functions:
