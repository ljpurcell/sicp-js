// Exercise 1.8

function abs(x) {
    return x >= 0 ? x : - x;
}

function square(x) {
    return x * x;
}

function cube(x) {
    return square(x) * x;
}

function is_good_enough(guess, x) {
    return abs(cube(guess) - x) < 0.001;
}

function average(x, y) {
    return (x + y) / 2;
}

function improve(guess, x) {
   return (x/square(guess) + 2*guess) / 3;
}

function cbrt_iter(guess, x) {
    return is_good_enough(guess, x) 
            ? guess
            : cbrt_iter(improve(guess, x), x);
}

function cbrt(x) {
    return cbrt_iter(1, x);
}

cbrt(1000);