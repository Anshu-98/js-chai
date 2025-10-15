//------------Immediately Invoked Function Expression (IIFE)---------------
//iife executes as soon as it is created. Main reason to use iife is restrict the global scope to polute the function

(function database(){             //named iife
    console.log("DB Connected")
})();                             // ; is important to terminate the execution of iife

((name)=> {
    console.log(`DB connected again ${name}`)
})("Anshu")

