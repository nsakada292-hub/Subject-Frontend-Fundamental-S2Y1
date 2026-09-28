// promise data flow
// 1. pending (promise)
// 2. fullfill / resolve: action when promise success
// 3. rejected : action when promise failed

// To do list
// 1. Eat breakfast

// const promise = new Promise();
// console.log(promise)

function eatBreakfastTask(){
    let isCompleted = true;
    return new Promise((resolve, rejected)=>{
        // ternary operator
        // condition ? expression_1: expression_2
        isCompleted ? resolve("You have eaten breakfast") : rejected("You skip breakfast!")
    }, 500)
}

function washDishesTask(){
    let isCompleted = false;
    return new Promise((resolve, rejected)=>{
        // ternary operator
        // condition ? expression_1: expression_2
        isCompleted ? resolve("You have washed dishes") : rejected("Dishes hasn't cleaned!")
    }, 2000)
}

function takeOutTrashTask(){
    let isCompleted = true;
    return new Promise((resolve, rejected)=>{
        // ternary operator
        // condition ? expression_1: expression_2
        isCompleted ? resolve("You have taken out the trash") : rejected("Your trashes smells so bad!")
    }, 1000)
}

function reviewLessonTask(){
    let isCompleted = false;
    return new Promise((resolve, rejected)=>{
        // ternary operator
        // condition ? expression_1: expression_2
        isCompleted ? resolve("Passed exam") : rejected("Failed exam")
    }, 3000)
}

eatBreakfastTask()
.then(value => console.log(value))
.catch(error => console.log(error))

washDishesTask()
.then(value => console.log(value))
.catch(error => console.log(error))

takeOutTrashTask()
.then(value => console.log(value))
.catch(error => console.log(error))

reviewLessonTask()
.then(value => console.log(value))
.catch(error => console.log(error))
