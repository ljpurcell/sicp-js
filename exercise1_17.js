// Exercise 1.17

function times(a, b) {
    return b === 0
           ? 0
           : a + times(a, b - 1);
}

function is_even(n) {
    return n % 2 === 0;
}

function doubles(n) {
    return n + n;
}

function halves(n) {
    return n / 2;
}

function fast_times(a, b) {
    return b === 1
           ? a
           : a === 0 || b === 0
           ? 0
           : is_even(b)
           ? doubles(fast_times(a, halves(b))
           : a + fast_times(doubles(a), halves(b-1));
}

fast_times(9, 5);




