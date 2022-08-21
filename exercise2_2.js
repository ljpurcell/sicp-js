// Exercise 2.2

function make_point(x, y) { return pair(x, y); }
function x_point(p) { return head(p); }
function y_point(p) { return tail(p); }
function avg(a, b) { return (a + b) / 2; }

function make_segment(sp, ep) {
    return pair(sp, ep);
}  

function start_segment(s) {
    return head(s);
}

function end_segment(s) {
    return tail(s);
}

function midpoint_segment(S) {
    return make_point(avg(x_point(start_segment(S)), x_point(end_segment(S))), 
                      avg(y_point(start_segment(S)), y_point(end_segment(S))));
}

function print_point(p) {
    return display("(" + stringify(x_point(p)) + ", "
                       + stringify(y_point(p)) +        ")");
}

const a = make_point(1, 1);
const b = make_point(2, 2);
const S = make_segment(a, b);
print_point(a);
print_point(b);
print_point(midpoint_segment(S));