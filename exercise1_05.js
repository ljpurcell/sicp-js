// Exercise 1.5
function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}

test(0, p());

/**
 * Answer:
 * 
 * This is a valid test to determine whether an interpreter is using
 * application-order evaluation or normal-order evaluation as
 * if the application is using application-order evaluation, where 
 * expressions are evaluated "immediately", the call to p() in test
 * will cause an infinite loop.
 * 
 * However, in normal-order evaluation, the evaluation of argument 
 * expressions is deferred and they are only evaluated once the 
 * application has been reduced to primitives and if necessary.
 * As such, the function p will never be called.
 */
