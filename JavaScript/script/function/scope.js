// there are 3scopes of varaible ,function ,object in js
// a.globle scope
let x=100;
function test1(){
    return x;
}
// // function test2(){
// //     x=200;
// //     return x;
// // }
console.log(`
    test1->x:${test1()}
    `)
    // b function scope 
    function test3(){
        let y=500;
        return y;

    }
    // function test4(){
    //     // y=700;//❎doesn't declare yet because it's in declaration
    //     // return y;

    // }
    console.log(`
        test3->y:${test3()}
        `)
        // c. block scope
        // console.log(`$y:${y}`);
