// Exercise 1.42

function inc(x) { return x + 1; }
function square(x) { return x * x; }

function compose(f, g) {
    return x => f(g(x));
}

compose(square, inc)(6);