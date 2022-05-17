
/* Async task */
const connectServer = function(){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let serverConnected = true
    
            if (serverConnected){
                return resolve("localhost:8000")
            }
        
            return reject( Error("Connection failed"))
        }, 1000)
        
    })
} 

/* Async task */
const connectDatabase = function(password){

    return new Promise((resolve, reject) => {
        console.log("Connecting to database...")
        setTimeout(() => {
            if (password === "Hassan2345"){
                return resolve("database:localhost")
            }
            
            return reject( Error("Wrong password"))
        },2000)
    })
}

/* Async task */
const fetchData = function(){

    return new Promise((resolve, reject) => {
        console.log("Fetching data from database...")
        setTimeout(() => {

            let data = [{
                name: "Hassan",
                surname: "El Abdallah"
            }]

            if (data.length > 0){
                return resolve(data)
            }
            
            return reject("No records found")
        },1500)
    })
}



/* first way to call, using (then,catch) */
connectServer()
    .then(server => {
        console.log(server)
        return connectDatabase("Hassan12345")
    })
    .then(database => {
        console.log(database)
        return fetchData()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })


/* second way to call, using (async,await) */
async function start(){
    const server = await connectServer();
    console.log(server)

    const database = await connectDatabase("Hassan12345");
    console.log(database)

    const data = await fetchData();
    console.log(data)

}

start()

console.log("Connecting to server...")
