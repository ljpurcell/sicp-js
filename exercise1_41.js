// Exercise 1.41

function inc(x) { return x + 1; }

function double(f) {
    return x => f(f(x));
}

double(double(double))(inc)(5);