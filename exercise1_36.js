// Exercise 1.36
const tolerance = 0.00001;

function abs(x) { return x >= 0 ? x : - x; }
function average(x, y) { return (x + y) / 2; }

function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return abs(x - y) < tolerance;
    }
    function try_with(guess) {
        const next = f(guess);
        const damped = average(guess, next);
        display(damped);
        return close_enough(guess, damped)
               ? damped
               : try_with(damped);
    }
    return try_with(first_guess);
}


fixed_point(x => math_log(1000)/math_log(x), 1.1);