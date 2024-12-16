# Unexpected Null Handling in Loose Comparison

This repository demonstrates a common JavaScript bug related to loose comparison and null handling. The `foo` function aims to handle null values gracefully but exhibits unexpected behavior due to the use of loose comparison (`===`).

## Bug Description
The `foo` function returns `null` if either `a` or `b` is `null`.  While this may seem intended, it can lead to unexpected results if you expect the function to perform some calculation even if one argument is `null` (e.g. a default value of 0).

## Solution
The solution employs a stricter null check and introduces default values to handle null arguments appropriately.

## How to reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Observe the unexpected output.
4. Run `node bugSolution.js` to see the corrected behavior.