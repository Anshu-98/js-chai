// Immedialtely Invoked Function Expression(IIFE)  ----An IIFE is a JavaScript function that is executed immediately after it is defined. It is commonly used to create a private scope for variables, preventing them from polluting the global namespace.

(function first(){                      // name iife without parameters
    console.log("DB connected")
})();

// (()=>{ console.log("DB connected again")})()   --- this function will give an error as we     need to stop context of iife. use ";" to terminate/stop context of the iife

((name)=>{ console.log(`DB connected again ${name}`)})('Anshu') // iife with parameters