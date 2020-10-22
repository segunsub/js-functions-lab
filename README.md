# Simple Functions Lab

## Making the Test Pass
* The Unit Tests are located in `answers.test.js`. You can look inside that file. It's not magic. 🧙🏾‍♂️
* In order for me to accept your submission, all of my tests must pass.
    1. From this project's **root directory** (not this current directory), install the test with `npm install`. (Do this only one time)
    2. Run your test with `npm test`. (Run this command often to see if your functions are passing)

## Coding Exercises

1. Write a function that takes a name and **returns** a greeting with `"Hello"` and the person's name.

    Example:
    ```javascript
    hello("Carmen"); // "Hello, Carmen!"
    hello("Devonte"); // "Hello, Devonte!"
    hello("Reuben Ogbonna"); // "Hello, Reuben Ogbonna!"
    ```

2. Write a function that **logs** all even numbers from 0 to 50, inclusive, to the console. Log all numbers on separate lines. Then, this function should **return** the string, `"Why is 6 afraid of 7?"`.

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
    findProduct(5, 7); // 35
    findProduct(15, 10); // 150
    findProduct(25.75, 42); // 1081.5
    ```

4. Write a function that returns the sum of all numbers between 1 and some other number, inclusive, that are multiples of 4 or 7. For example, if the supplied number is 17, the result should be 61 (4 + 7 + 8 + 12 + 14 + 16).

    You may assume that the number passed in is an integer greater than 1.

    Examples:
    ```javascript
    multisum(17); //(4 + 7 + 8 + 12 + 14 + 16) => 61
    multisum(21); //(4 + 7 + 8 + 12 + 14 + 16 + 20 + 21) => 102
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
