// Exercise 1.9

function inc(x) {
    return x + 1;
}
function dec(x) {
    return x - 1;
}

function plus_rec(a, b) {
    return a === 0 ? b : inc(plus_rec(dec(a), b)); 
}

function plus_iter(a, b) {
    return a === 0 ? b : plus_iter(dec(a), inc(b));
}

plus_rec(4, 5);
plus_iter(4, 5);

/**
 * Answer: 
 * 
 * The first plus function, named `plus_rec`,
 * generates a recursive process. 
 * 
 * The second, named `plus_iter`, generates an
 * iterative process.
 * 
 * Although `plus_iter` is a recursively defined function,
 * it generates an iterative process. This is because at the 
 * point that `plus_iter` is called within itself, 
 * the entire state of the process can be passed to the next call,
 * which will be `plus_iter(3, 6)`.
 * 
 * Conversely, `plus_rec` cannot pass the entire state of state
 * of the process to itself when it makes its recursive call. It
 * must maintain a "memory" (state) of which computations have been
 * deferred and still need to be evaluated `inc(inc(inc(...)))` etc.
 * 
 * 
 * 
 */