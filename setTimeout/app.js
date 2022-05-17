
let call1 = () => {
    return console.log("Call 1")
}

let callback1 = () => {
    return console.log("Call 2")
}

let callback2 = () => {
    return console.log("Call 3")
}

let call4 = () => {
    return console.log("Call 4")
}

call1()
setTimeout(callback1, 1000) 
setTimeout(callback2, 0) 
call4()
// 1- "Call stack" calls 1
// 2- Callback added to -> (Callback queue)
// 3- "Call stack" calls 3
// 4- "Call stack" completed all calls
// 5- (Callback queue) added to -> "Call stack"
// 6- "Call stack" calls 2

/*
    Call 1
    Call 3
    Call 2
 */