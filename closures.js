// A closure is the combination of a function binded together with its lexical environment.

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }

    y();
}

x();