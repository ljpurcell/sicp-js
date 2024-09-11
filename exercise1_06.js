// Exercise 1.6

function conditional(predicate, then_clause, else_clause) {		    
    return predicate ? then_clause : else_clause;
}

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
    return conditional(is_good_enough(guess, x),
                       guess,
                       sqrt_iter(improve(guess, x),
                                 x));
}

sqrt_iter(3, 25);

/**
 * Answer:
 * 
 * Because of applicative-order evaluation, both the then_clause and the 
 * else_clause argument expressions of the conditional function are
 * evaluated.
 * 
 * However, the call to sqrt_iter as one of these arguments is recursive
 * meaning there will be an infinite loop. The base case of using the 
 * conditional does not work as both clauses are still being evaluated
 * due to application-order.
 */
