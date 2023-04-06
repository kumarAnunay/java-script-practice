// Scope:- Scope means where you can access a specific varaiable and function in our code. Scope is directly dependent on the lexical environment.


/* 
    Whenever we run a programme in javascript a global execution context is created 
    and it is pushed inside the call stack. Global execution context has two sections
    inside it memory phase and code execution phase.

    1. It will go through the whole code and will assign the values to global variables
       and functions in memory location.
    2. It gives value undefined to the global variables.
    3. It gives value reference of function to the function i.e. put whole function as value.
    4. Once code starts executing in code execution phase variable gets its initialised value.
    4. Whenever we invoked a function a execution context is created of that function.
        And it has again two sections the memory location and code execution.
    Lexical environment:- Lexical environment is the local memory along with its lexcial environemnt of its parent.
    Lexical means where code is present physically. 
    5. Whenever execution context is created a lexical environment is also created.
    6. Whenever execution context is created you also get access to the lexical environment of its parent along with variables and functions in memory phase.
    
    
*/


function a() {
    var b = 10;
    function c() {
        console.log(b);
    }
    c();
}
a();