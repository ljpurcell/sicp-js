// Exercise 1.7

function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x) {
    return x * x;
}

function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
            ? guess
            : sqrt_iter(improve(guess, x), x);
}

function sqrt(x) {
    return sqrt_iter(1, x);
}


function is_close_enough(a, b) {
    return abs(a) - abs(b) < 0.001; 
}

function sqrt_iter2(guess, x) {
    return is_close_enough(guess, improve(guess, x))
            ? guess
            : sqrt_iter2(improve(guess, x), x);
}

function sqrt2(y) {
    return sqrt_iter2(1, y);
}

/**
 * Answer:
 * 
 * The above `is_good_enough` funnction will not work well for small
 * as threshold for accuracy is too imprecise relative to their size.
 * 
 * The test is also inadequate for very large numbers as the limited
 * precision of numerical operations in computers always have some
 * rounding errors. This may cause the program to never terminate
 * with large numbers as the rounding error may always exceed the
 * accuracy threshold.
 * 
 * The function `is_close_enough` is an alternative that uses the 
 * sameness of successive guesses as a test.
 * guesses as a method
 * 
 * It work better for small numbers, but not for large ones.
 */

sqrt(0.0001); // Returns 0.0323. Should be 0.01.
sqrt2(0.0001); // Correctly returns 0.01.

sqrt(99999999999999999999999); // Produces an infinite loop
sqrt2(99999999999999999999999); // Returns 1. Should be 316227766017.