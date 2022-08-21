// Exercise 2.1

function numer(x) {
    return head(x);
}
function denom(x) {
    return tail(x);
}

function abs(x) { return x >= 0 ? x : -x; } 

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function same_sign(n, d) { 
    return n >= 0 && d >= 0 || n < 0 && d < 0
           ? true
           : false;
}

function make_rat(n, d) {
    const g = gcd(n, d);
    return same_sign(n, d)
           ? pair(abs(n / g), abs(d / g))
           : pair(-abs(n / g), abs(d / g));
}

function add_rat(x, y) {
    return make_rat(numer(x) * denom(y) + numer(y) * denom(x),
                    denom(x) * denom(y));
}
function sub_rat(x, y) {
    return make_rat(numer(x) * denom(y) - numer(y) * denom(x),
                    denom(x) * denom(y));
}
function mul_rat(x, y) {
    return make_rat(numer(x) * numer(y),
                    denom(x) * denom(y));
}
function div_rat(x, y) {
    return make_rat(numer(x) * denom(y),
                    denom(x) * numer(y));
}
function equal_rat(x, y) {
    return numer(x) * denom(y) === numer(y) * denom(x);
}

function print_rat(x) {
    return display(stringify(numer(x)) + " / " + stringify(denom(x)));
}

const one_third = make_rat(1, 3);

print_rat(one_third);
