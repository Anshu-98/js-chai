
//------------Immediately Invoked Function Expression (IIFE)---------------
//iife executes as soon as it is created. Main reason to use iife is restrict the global scope to polute the function

(function database(){             //named iife
    console.log("DB Connected")
})();                             // ; is important to terminate the execution of iife

((name)=> {
    console.log(`DB connected again ${name}`)
})("Anshu");


// Immedialtely Invoked Function Expression(IIFE)  ----An IIFE is a JavaScript function that is executed immediately after it is defined. It is commonly used to create a private scope for variables, preventing them from polluting the global namespace.

(function first(){                      // name iife without parameters
    console.log("DB connected")
})();

// (()=>{ console.log("DB connected again")})()   --- this function will give an error as we     need to stop context of iife. use ";" to terminate/stop context of the iife

((name)=>{ console.log(`DB connected again ${name}`)})('Anshu') // iife with parameters

