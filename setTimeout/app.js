
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
// 1- "Call stack" calls '1'
// 2- Callback1 added to -> (Callback aueue)
// 3- Callback2 added to -> (Callback queue)
// 4- "Call stack" calls '4'
// 5- "Call stack" completed all calls
// 6- (Callback queue) added to -> "Call stack"
// 7- "Call stack" calls '3' - 0 msec
// 8- "Call stack" calls '2'- 1000 msec
// 9- "Call stack' completed all calls

/*
    Call 1
    Call 4
    Call 3
    Call 2
 */