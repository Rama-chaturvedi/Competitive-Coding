/**
 * @return {Function}
 */
// var createHelloWorld = function() {
    
//     return function(...args) {
        
//     }
// };

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


 function createHelloWorld(){
    function myWorld(){
        return("Hello World")
    }
    return myWorld
}